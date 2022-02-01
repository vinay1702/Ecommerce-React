import React, { useEffect } from "react";
import { Form, Input, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../store/Slices/userSlice";
const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => ({
    ...state.user
  }));

  useEffect(() => {
    if (status === "SUCCESS") {
      navigate(-1);
    }
  }, [status]);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(fetchUser(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card style={{ width: 300, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
      <h3>Login to Ecommerce</h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ email: "vinay@gmail.com", password: "Test123" }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        {error && (
          <Form.Item label="" validateStatus="error" help={error}></Form.Item>
        )}
      </Form>
    </Card>
  );
};

export default Login;
