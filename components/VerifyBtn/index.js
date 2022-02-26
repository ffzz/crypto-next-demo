import { Button } from "antd";
import React from "react";

const VerifyBtn = ({ message }) => {
  const handleVerify = () => {};
  return (
    <Button type="primary" size="small" onClick={handleVerify}>
      Verify
    </Button>
  );
};

export default VerifyBtn;
