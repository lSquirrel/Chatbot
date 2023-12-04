import { FloatButton, Input, Form, Space } from 'antd';
import { CustomerServiceOutlined, CloseCircleOutlined, SendOutlined, LoadingOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons';
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { getChatTime } from "./util";
import Fuse from 'fuse.js';

const options = {
  includeScore: true,
  keys: ['question']
};
let fuse: any;

export interface Dialogue {
  question: string,
  reply: string,
  isDefault?: boolean
}
type Theme = 'default' | 'green' | 'blue';
export interface ChatbotProps {
  title?: string, // 标题
  greet?: string, // 一进来显示的打招呼内容
  robotAvatar?: string, // 机器人头像
  userAvatar?: string, // 用户头像
  dialogues: Dialogue[],
  failTips?: string, // 匹配失败时的提示语
  historyMessages?: Message[], // 历史对话数据
  onReply?: Function, // 返回当前回复message
  getMessages?: Function, // 获取历史记录
  theme?: Theme // 主题 default blue green
}
type MessageType = 'content' | 'list';
export interface Message {
  createdAt: number,
  role: string, // 发送这角色：user assistant
  content?: string, // 消息内容
  list?: string[], // 消息内容
  type?: MessageType // 消息类型: 默认是content list
}
const defaultFailTips = '亲爱的用户，我不太懂您的意思。';

// 聊天弹窗
let updateChatTimeInterval: number;
const ChatDialog = React.memo((props: any) => {
  const { onClose, width, title, dialogues, greet, failTips, historyMessages, onReply, getMessages, theme, robotAvatar, userAvatar } = props;
  let defaultOtherQues: string[] = [];
  interface FormValues {
    content: string
  }
  // 消息记录列表
  const [messages, setMessages] = useState<Message[]>([]);
  // 其他可能性问题 除匹配度最高问题的其他匹配到的问题
  const [otherQues, setOtherQues] = useState<string[]>([]);
  // 正在发送和接收消息
  const [isSubmiting, setIsSubmiting] = useState(false);

  // 显示默认消息内容 和 猜你想问
  useEffect(() => {
    const tDOQues: string[] = [];
    for (let i = 0; i < dialogues.length; i++) {
      const item = dialogues[i];
      if (item.isDefault) {
        tDOQues.push(item.question);
      }
    }
    let tMessage: Message[] = [];
    // 添加历史记录
    if (historyMessages && historyMessages.length > 0) {
      tMessage = [...historyMessages];
    }
    // 添加问候语
    if (greet) {
      tMessage.push({
        createdAt: Date.now(),
        role: 'assistant',
        content: greet,
        type: 'content'
      })
    }
    if (tDOQues.length > 0) {
      // 默认”底部提示问题“
      defaultOtherQues = tDOQues;
      // 添加”猜你想问“
      tMessage.push({
        createdAt: Date.now(),
        role: 'assistant',
        list: tDOQues,
        type: 'list'
      })
      setOtherQues(tDOQues);
    }
    setMessages(tMessage)
  }, []);

  // 5分钟内message没有更新，则强制更新显示的时间
  useEffect(() => {
    // 消息列表有更新时，clear当前interval
    if (updateChatTimeInterval || updateChatTimeInterval === 0) {
      clearInterval(updateChatTimeInterval);
    }
    // 创建新的interval重新计时
    if (messages.length > 0) {
      updateChatTimeInterval = setInterval(() => {
        setMessages((preState) => {
          return [
            ...preState
          ]
        })
      }, 300000);
    }

    return () => clearInterval(updateChatTimeInterval);
  }, [messages])

  // 获取回复内容
  const getChatReply = (question: string) => {
    const replyMessage: Message = {
      createdAt: Date.now(),
      role: 'assistant',
      content: '',
      type: 'content'
    };

    // 匹配问题对应的回答
    if (fuse) {
      // Results [ { item: Dialogue, refIndex: number, score: number } ]
      const results = fuse.search(question); // 结果按照score分数由高到低排序
      const ques: string[] = [];
      let maxScore; // 匹配最高分
      const maxScoreQues: string[] = []; // 匹配到最高分的问题 如果有多个 则type list，显示"猜你想问"
      for (let i = 0; i < results.length; i++) {
        const item = results[i] && results[i].item;
        if (item) {
          if (!replyMessage.content) { // 第一个匹配到的问题
            maxScore = results[i].score;
            replyMessage.content = item.reply;
            maxScoreQues.push(item.question);
          } else if (maxScore === results[i].score) { // 多个最高分问题集合到一起显示在”猜你想问“
            maxScoreQues.push(item.question);
          } else { // 其他匹配到的问题放到底部tips显示
            ques.push(item.question);
          }
        }
      }
      if (maxScoreQues.length > 1) {
        replyMessage.type = 'list';
        replyMessage.list = maxScoreQues;
      }
      // 更新底部提示按钮列表
      if (ques.length > 0) {
        setOtherQues(ques);
      } else if (defaultOtherQues.length > 0) {
        setOtherQues(defaultOtherQues);
      } else {
        setOtherQues([]);
      }
    }
    if (!replyMessage.content) {
      replyMessage.content = failTips || defaultFailTips;
    }

    // 调用onReply
    if (onReply && typeof onReply === 'function') {
      onReply(replyMessage);
    }

    return replyMessage;
  }

  // 提问 并调用回复接口
  const onSendMessage = async (content: string) => {
    // 判断此时是否正在发送或者接收消息 如果是 则不允许再次发送
    if (isSubmiting) {
      return;
    }
    setIsSubmiting(true);

    const input: Message = {
      createdAt: Date.now(),
      role: 'user',
      content: content,
      type: 'content'
    }
    // 将发送的消息添加到列表
    setMessages((preState: Message[]) => {
      return [
        ...preState,
        input
      ]
    })
    const replyMessage: Message = getChatReply(content);
    // 将回复的消息添加到列表
    setMessages((preState: Message[]) => {
      return [
        ...preState,
        replyMessage
      ]
    })
    setIsSubmiting(false);
  }

  // messages更新时的操作
  useEffect(() => {
    // 有新消息时将屏幕滚动到最下面
    const mainEle = document.getElementById('main');
    if (mainEle) {
      mainEle.scrollTop = 999999;
    }

    // messages更新时返回完整的历史记录
    if (getMessages && typeof getMessages === 'function') {
      getMessages(messages);
    }
  }, [messages])

  // 表单相关
  const formRef = useRef(null);
  const [form] = Form.useForm();
  const onFinish = (values: FormValues) => {
    // 判断此时是否正在发送或者接收消息 如果是 则不允许再次发送
    if (isSubmiting) {
      return;
    }
    setIsSubmiting(true);
    // 创建新的消息
    const content = values && values.content && values.content.trim();
    onSendMessage(content);
    // 清空输入框
    if (formRef.current) {
      (formRef.current as any).setFieldsValue({
        content: ''
      });
    }
  };

  return (
    <div className="flex flex-column h">
      <header className={`center relative ptmd pbmd header-${theme}`}>
        <div className="fs6 bold">{title || '机器人客服为您服务'}</div>
        <CloseCircleOutlined style={{ fontSize: 26 }} className="icon-close pointer" onClick={onClose} />
      </header>
      <main id="main" className="box plsm prsm pbsm overflow-y-auto">
        {
          messages.map((item, key) => {
            if (item) {
              // 我发送的
              const isSelf = item.role === 'user' ? true : false;
              // 是否显示时间：与上一条消息时间间隔5分钟内的 不再显示
              const isShowTime = (!messages[key - 1] || item.createdAt - messages[key - 1].createdAt > 300000) ? true : false;
              return <div key={key}>
                {/* 时间 */}
                {
                  isShowTime &&
                  <div className="mtmd center">
                    <div className="chatTime inline centered fs2">
                      {getChatTime(item.createdAt)}
                    </div>
                  </div>
                }
                <div style={{ marginTop: '15px' }}>
                  <div className={`faceWrap ${isSelf ? 'fright' : 'fleft'}`}>
                    {
                      isSelf ? 
                      (
                        userAvatar ?
                        <img src={userAvatar} className="face" />
                        :
                        <UserOutlined className='face-icon' />
                      )
                      :
                      (
                        robotAvatar ?
                        <img src={robotAvatar} className="face" />
                        :
                        <RobotOutlined className='face-icon' />
                      )
                    }
                  </div>
                  <div className={`${isSelf ? 'fright mrxs bgcprimary c1' : 'fleft mlxs bgc1'} bubble`}>
                    {
                      item.type === 'list' ?
                        <Fragment>
                          <div className="bold fs4">猜您想问</div>
                          {
                            item.list?.map((con, key) => {
                              return <div key={con} className={`${key === 0 ? '' : 'bdt'} ptxs pbxs pointer`}
                                onClick={() => {
                                  onSendMessage(con);
                                }}
                              >
                                {key + 1}. {con}
                              </div>
                            })
                          }
                        </Fragment>
                        :
                        (
                          isSelf ? item.content :
                            (
                              item.content ? item.content : <LoadingOutlined />
                            )
                        )
                    }
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            }
            return '';
          })
        }
      </main>
      <footer>
        {
          otherQues && otherQues.length > 0 &&
          <div className="overflow-x-auto flex w pbsm ptsm plxs prxs box">
            {
              otherQues.map((item) => {
                return (
                  <span key={item} className="footTip pointer"
                    onClick={() => {
                      onSendMessage(item);
                    }}
                  >{item}</span>
                )
              })
            }
          </div>
        }
        <Form
          name="basic"
          form={form}
          ref={(ref) => {
            if (formRef) {
              (formRef as any).current = ref;
            }
          }}
          initialValues={{ content: '' }}
          onFinish={onFinish}
          className="pblg"
        >
          <Space>
            <Form.Item
              name="content"
              style={{ marginBottom: 0, paddingLeft: '10px' }}
              rules={[{ required: true, message: '' }]}
            >
              <Input
                className="input"
                style={{ width: `${width - 50}px` }}
                placeholder="请输入您想咨询的问题"
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <SendOutlined className={`${theme === 'green' ? 'cinfo' : 'cprimary'} icon-send`}
                style={{ fontSize: 26, color: isSubmiting ? '#aaa' : '' }}
                onClick={() => {
                  form.submit();
                }} />
            </Form.Item>
          </Space>
        </Form>
      </footer>
    </div>
  )
})

const Chatbot = (props: ChatbotProps) => {
  const { dialogues, theme } = props;
  const [showChatDialog, setShowChatDialog] = useState(false);

  // 获取窗口尺寸
  const getWindowSize = () => {
    const width = window.innerWidth || 1200;
    return {
      width,
      height: window.innerHeight,
      isMobile: width < 769 ? true : false
    }
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleResize = () => {
    setWindowSize({
      ...windowSize,
      ...getWindowSize()
    })
  }
  useEffect(() => {
    // 监听窗口变化
    window.addEventListener('resize', handleResize);
    // 卸载时销毁监听
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  // 初始化fuse
  useEffect(() => {
    fuse = new Fuse(dialogues, options);
  }, [])

  // 显示隐藏对话弹窗
  const onSwitchChatDialog = useCallback(() => {
    setShowChatDialog((preState) => {
      return !preState
    });
  }, [])
  return (
    <div id="chatbotroot" className={`inline chatbotroot-${theme || ''}`}>
      <FloatButton
        shape="circle"
        type="primary"
        style={{
          right: 50,
          bottom: 50
        }}
        icon={<CustomerServiceOutlined />}
        onClick={onSwitchChatDialog}
      />
      {
        showChatDialog &&
        <div className={`dialog-container dialog-container-${windowSize.isMobile ? 'm' : 'w'}`}>
          <ChatDialog {...props} {...windowSize} onClose={onSwitchChatDialog} width={windowSize.isMobile ? windowSize.width : 350} />
        </div>
      }
    </div>
  )
}

export default Chatbot;