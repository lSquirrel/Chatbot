import { Props } from "../../lib/common";
import { FloatButton, Input, Form, Space } from 'antd';
import { CustomerServiceOutlined, CloseCircleOutlined, SendOutlined, MehOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { Fragment, useCallback, useEffect, useRef, useState } from "react";
import './index.css';
import { createId, getChatTime } from "../../lib/util";

interface Message {
  id: string,
  createdAt: number,
  createdBy: string, // 对话创建人
  role: string, // 发送这角色：user assistant
  content: string | null // 消息内容
}
const failTips = 'Sorry, network anomaly, please try again later.';

// 获取历史记录接口
const getChatHistory = async () => {
  return fetch(`http://localhost:3000/messages`, {
    method: 'GET'
  }).then((res) => res.json()).then((json) => {
      return json.data;
  }).catch((err) => {
      console.error('get history error: ', err)
  })
}
// 获取回复内容接口
const getChatReply = async (input: Message, cb: Function) => {
  const replyMessage: Message = {
    id: input.id + 'reply',
    createdAt: Date.now(),
    createdBy: 'userId',
    role: 'assistant',
    content: ''
  };
  cb(replyMessage);
  const response = await fetch(`http://localhost:3000/chat`, {
    body: JSON.stringify(input),
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "omit",
    mode: "cors"
  });
  if (!response.body) {
    replyMessage.content = failTips;
    return replyMessage;
  }
  if (response.status == 200) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
      const data = decoder.decode(value);
      if (data.slice(-6) === "[Done]") { // "[Done]"是结束标识
        replyMessage.content += data.slice(0, -6); // 去掉结束标识部分
        return replyMessage;
      }
      replyMessage.content += data;
      cb(replyMessage);
    }
  }
  return replyMessage;
}

// 聊天弹窗
const ChatDialog = React.memo((props: any) => {
  const { onClose, width } = props;
  const footTips = [
    "Is free plan avalilable?",
    "Do you generate lead?",
    "What's React Hooks?"
  ]
  interface FormValues {
    content: string
  }
  // 消息记录列表
  const [messages, setMessages] = useState<Message[]>([]);
  // 当前正在生成中的回复信息，生成完毕后放入messages
  const [currReplyMessage, setCurrReplyMessage] = useState<Message | null>(null);
  // 正在发送和接收消息
  const [isSubmiting, setIsSubmiting] = useState(false);

  useEffect(() => {
    // 获取聊天记录 按时间顺序排序
    getChatHistory().then((chatMessages) => {
      if (chatMessages && chatMessages.length > 0) {
        setMessages(chatMessages)
      }
    })
  }, []);

  // 提问 并调用回复接口
  const onSendMessage = async (content: string) => {
    // 判断此时是否正在发送或者接收消息 如果是 则不允许再次发送
    if (isSubmiting) {
      return;
    }
    setIsSubmiting(true);

    const input: Message = {
      id: createId(),
      createdAt: Date.now(),
      createdBy: "userId",
      role: 'user',
      content: content,
    }
    // 将发送的消息添加到列表
    setMessages((preState: Message[]) => {
      return [
        ...preState,
        input
      ]
    })
    const replyMessage: Message = await getChatReply(input, (tMessage: Message) => {
      // 更新当前正在回复的消息内容
      setCurrReplyMessage({ ...tMessage });
    });
    // 将回复的消息添加到列表
    setMessages((preState: Message[]) => {
      return [
        ...preState,
        replyMessage
      ]
    })
    setCurrReplyMessage(null);
    setIsSubmiting(false);
  }

  useEffect(() => {
    // 有新消息时将屏幕滚动到最下面
    const mainEle = document.getElementById('main');
    if (mainEle) {
      mainEle.scrollTop = 999999;
    }
  }, [messages, currReplyMessage])

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

  // 消息列表 = 原有列表 + 当前正在回复的message（不断更新中）
  const displayMessages = messages ? [...messages] : [];
  if (currReplyMessage) {
    displayMessages.push(currReplyMessage)
  }
  return (
    <div className="flex flex-column h">
      <header className="center relative ptmd pbmd">
        <div className="fs6 bold">How can i help you with queries?</div>
        <CloseCircleOutlined style={{ fontSize: 26 }} className="icon-close pointer" onClick={onClose} />
      </header>
      <main id="main" className="box plsm prsm overflow-y-auto">
        {
          displayMessages.map((item, key) => {
            if (item) {
              // 我发送的
              const isSelf = item.role === 'user' ? true : false;
              // 是否显示时间：与上一条消息时间间隔5分钟内的 不再显示
              const isShowTime = (!displayMessages[key - 1] || item.createdAt - displayMessages[key - 1].createdAt > 300000) ? true : false;
              return <div key={item.id}>
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
                    <img src={isSelf ? '/images/user.png' : '/images/robot.png'} className={`face`} />
                  </div>
                  <div className={`${isSelf ? 'fright mrxs bgcprimary c1' : 'fleft mlxs bgc1'} bubble`}>
                    {
                      isSelf ? item.content :
                        (
                          item.content ? (
                            item.content === failTips ?
                              <Fragment>
                                <MehOutlined style={{ color: '#ff4d4f' }} />
                                &nbsp;
                                {item.content}
                              </Fragment>
                              :
                              item.content
                          )
                            :
                            <LoadingOutlined />
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
      <footer className="">
        <div className="overflow-x-auto flex w pbsm ptsm plxs prxs box">
          {
            footTips.map((item) => {
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
                style={{ width: `${width - 50}px` }}
                placeholder="Type a message"
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <SendOutlined className="cprimary icon-send"
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

const Chatbot = (props: Props) => {
  const { isMobile, width } = props;
  const [showChatDialog, setShowChatDialog] = useState(false);

  const onSwitchChatDialog = useCallback(() => {
    setShowChatDialog((preState) => {
      return !preState
    });
  }, [])
  return (
    <div className="inline">
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
        <div className={`dialog-container dialog-container-${isMobile ? 'm' : 'w'}`}>
          <ChatDialog onClose={onSwitchChatDialog} width={isMobile ? width : 350} />
        </div>
      }
    </div>
  )
}

export default Chatbot;