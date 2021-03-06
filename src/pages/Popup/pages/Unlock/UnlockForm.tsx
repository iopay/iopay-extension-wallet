import React from "react";
import { styled } from "onefx/lib/styletron-react";

import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";

import { Logo } from "@/styles/logo";
import { fonts } from "@/styles/style-font";
import { useTranslation } from "react-i18next";

type FormValues = {
  password: string;
};

type UnlockFormProps = {
  onFinish?: (values: FormValues) => void;
};

export const UnlockForm: React.FC<UnlockFormProps> = ({ onFinish }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Logo margin={80} />
      <Title
        style={{
          marginTop: "21px",
          fontSize: "24px",
          lineHeight: "33px",
          fontWeight: 600,
        }}
      >
        {t("title.type.welcome_back")}
      </Title>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ password: "" }}
      >
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password size="large" placeholder="password" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "100%", marginTop: "148px" }}
          >
            {t("action.type.unlock")}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

const Container = styled("div", {
  padding: "16px",
});

const Title = styled("h1", {
  ...fonts.h1,
  textAlign: "center",
});
