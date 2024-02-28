import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const SignIn = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSignIn = (values) => {
    setItem("token", values);
    navigate("/revenue");
  };

  return (
    <div className="flex flex-col items-center w-full h-screen bg-[#F4F7FE]">
      <div className="mt-40 h-full">
        <div className="shadow-3xl bg-white rounded-2xl p-6 2xl:p-8">
          <p className="text-4xl text-primary font-bold">Sign In</p>
          <p className="mt-2 text-secondary">
            Enter your email and password to sign in!
          </p>
          <Form
            name="sign-in"
            className="mt-10 2xl:mt-12"
            initialValues={initialValues}
            onFinish={onSignIn}
          >
            <div>
              <p className="text-sm text-primary font-medium">
                Email<span className="text-violet">*</span>
              </p>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email" },
                ]}
              >
                <Input
                  className="mt-3 text-sm text-secondary h-12 md:w-[410px] pl-6 rounded-2xl border-secondary"
                  placeholder="mail@simmmple.com"
                />
              </Form.Item>
            </div>
            <div>
              <p className="text-sm text-primary font-medium">
                Password<span className="text-violet">*</span>
              </p>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { min: 8, message: "Please input at least 8 characters" },
                ]}
              >
                <Input.Password
                  className="mt-3 text-sm text-secondary h-12 md:w-[410px] pl-6 rounded-2xl border-secondary"
                  placeholder="Min. 8 characters"
                />
              </Form.Item>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <Checkbox />
              <p className="text-sm text-primary">Keep me logged in</p>
            </div>
            <Button
              htmlType="submit"
              className="mt-8 mb-2 w-full h-12 bg-main rounded-2xl text-sm text-white font-bold"
            >
              Sign In
            </Button>
          </Form>
        </div>
      </div>
      <p className="text-sm text-secondary font-medium py-8">{`© ${new Date().getFullYear()} Kim Thanh Tech`}</p>
    </div>
  );
};

export default SignIn;
