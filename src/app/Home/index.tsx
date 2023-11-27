import { useState } from "react";
import Chatbot from "../../components/Chatbot";
import { Props } from "../../lib/common";
import { Input, Form, Space, Button, Alert } from 'antd';

interface FormValues {
  apiKey: string
}
interface SetCbArgs {
  error?: string,
  status?: number
}

const setApiKey = async (apiKey: string, cb: Function) => {
  try {
    const response = await fetch(`http://localhost:3000/apiKey`, {
      body: JSON.stringify({
        apiKey
      }),
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "omit", // 不发送cookies
      mode: "cors" // 跨域
    });
    if (!response.body) {
      // 报错
      cb({
        error: 'failed'
      })
    }
    if (response.status == 200) {
      // 成功
      cb({
        status: 200
      })
    }
  } catch (error) {
    // 报错
    cb({
      error: 'error：' + JSON.stringify(error)
    })
  }
}

const Home = (props: Props) => {
  const [setResult, setSetResult] = useState<SetCbArgs>({});
  const onFinish = (values: FormValues) => {
    setApiKey(values.apiKey, (args: SetCbArgs) => {
      setSetResult(args);
    });
  };
  return (
    <div>
      <div className="pasm">
        <h1>Please set openAI apiKey.</h1>
        <Form
          name="setApiKey"
          initialValues={{ apiKey: '' }}
          onFinish={onFinish}
          className="pbsm"
        >
          <Space>
            <Form.Item
              name="apiKey"
              style={{ marginBottom: 0 }}
              rules={[{ required: true, message: '' }]}
            >
              <Input
                className="input"
                placeholder="Type a apiKey"
              />
            </Form.Item>
            <Form.Item style={{ marginBottom: 0 }}>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Space>
        </Form>
        {
          setResult.status === 200 ?
          <Alert message="success" type="success" showIcon />
          :
          setResult.error ?
          <Alert message={setResult.error} type="error" showIcon />
          : ''
        }
      </div>
      <Chatbot {...props} />
    </div>
  )
}


export default Home;