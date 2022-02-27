import { Button, notification } from "antd";
import { useVerifySignature } from "../../hooks/useVerifySignature";

const VerifyBtn = ({ message, signature }) => {
  const verifySignature = useVerifySignature({
    signature,
    message,
  });

  const handleVerify = async () => {
    try {
      const res = await verifySignature();
      const { verified, msg } = await res.json();
      if (verified) {
        notification.success({
          message: `Verified: ${verified}`,
          description: msg,
        });
      } else {
        notification.error({
          message: "Error",
          description: msg,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button type="primary" size="small" onClick={handleVerify}>
      Verify
    </Button>
  );
};

export default VerifyBtn;
