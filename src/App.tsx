import './App.css';
import Chatbot, { Dialogue, Message } from '../packages/Chatbot';
import React from 'react';

function App() {
  const dialogues: Dialogue[] = [
    {
      question: '你好',
      reply: '您好，请问有什么可以帮助您的吗？'
    },
    {
      question: '购买商品流程',
      reply: '打开APP，进入商品列表页浏览，选择感兴趣的商品点击，进入详情页，查看详细信息。',
      isDefault: true
    },
    {
      question: '退款流程',
      reply: '打开APP，点击“我的”，点击”订单“，在订单列表找到想要退款的物品，点击”退款“按钮。',
      isDefault: true
    },
    {
      question: '怎么申请退款或者退货',
      reply: '打开APP，点击”我的“，点击”订单“，在订单列表找到想要退款的物品，点击”退款“或者”退货“按钮。',
    },
    {
      question: '卖家不退款怎么办',
      reply: '如您已经申请退款，卖家超时未处理，系统会自动同意您的退款申请；如果卖家拒绝了您的申请，您可选择平台介入，我们帮您处理。'
    }
  ]
  return (
    <div className='App'>
      <h1>Example</h1>
      <Chatbot
        title="机器人客服为您服务"
        greet="您好，很高兴为您服务。"
        dialogues={dialogues}
        failTips=""
        historyMessages={[]}
        onReply={(message: Message) => {
          console.log("回复消息：", message)
        }}
        getMessages={(messages: Message[]) => {
          console.log("消息列表：", messages)
        }}
        theme="blue"
      />
    </div>
  )
}

export default App
