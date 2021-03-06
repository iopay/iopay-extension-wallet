import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { message, Spin } from "antd";
import { useSetRecoilState } from "recoil";

import { defaultPostman } from "@/pages/Popup/postman";
import { accountsList } from "@/recoil";

import { useTranslation } from "react-i18next";
import { UnlockForm } from "./UnlockForm";

export const Unlock = withRouter(({ history }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const setAccounts = useSetRecoilState(accountsList);
  const onFinish = async (values: { password: string }) => {
    setLoading(true);
    const isOk = await defaultPostman.verifyPasswd(values.password);
    try {
      if (isOk) {
        await defaultPostman.walletUnlock(values.password);
        const accounts = await defaultPostman.getAccounts();
        setAccounts(accounts);
        history.push("/dashboard");
      } else {
        message.info(t("message.error.password_incorrect"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <UnlockForm onFinish={onFinish} />
    </Spin>
  );
});
