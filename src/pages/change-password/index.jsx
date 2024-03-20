import { Button, Checkbox, Form, Input, message } from "antd";
import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useAuth } from "../../provider/auth";
import { API_URL } from "../../config";
import { api } from "../../provider/api";

const ChangePassword = () => {
  const navigate = useNavigate();
  const { setItem } = useLocalStorage();
  const initialValues = {
    oldPassword: "",
    newPassword: "",
  };

  const onChangePassword = async (values) => {
    const { oldPassword, newPassword } = values;
    try {
      const res = await api.post(`${API_URL}/auth/change-pass`, {
        password: oldPassword,
        password_confirmation: newPassword,
      });
      if(res && res.data) {
        message.success("Change password successfully");
        navigate("/revenue");
      } else {
        message.error("Password is not matching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen bg-[#F4F7FE]">
      <div className="mt-40 h-full">
        <div className="shadow-3xl bg-white rounded-2xl p-6 2xl:p-8">
          <p className="text-4xl text-primary font-bold">Change password</p>
          {/* <p className="mt-2 text-secondary">
            Enter your email and password to sign in!
          </p> */}
          <Form
            name="sign-in"
            className="mt-10 2xl:mt-12"
            initialValues={initialValues}
            onFinish={onChangePassword}
          >
            <div>
              <p className="text-sm text-primary font-medium">
                Password<span className="text-violet">*</span>
              </p>
              <Form.Item
                name="oldPassword"
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
            <div>
              <p className="text-sm text-primary font-medium">
                Re-Password<span className="text-violet">*</span>
              </p>
              <Form.Item
                name="newPassword"
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
            <Button
              htmlType="submit"
              className="mt-8 mb-2 w-full h-12 bg-main rounded-2xl text-sm text-white font-bold"
            >
              Save
            </Button>
          </Form>
        </div>
      </div>
      <p className="text-sm text-secondary font-medium py-8">{`© ${new Date().getFullYear()} Kim Thanh Tech`}</p>
    </div>
  );
};

export default ChangePassword;
