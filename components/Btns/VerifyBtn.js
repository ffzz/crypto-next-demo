import { Button, notification } from "antd";
import { myFetch } from "../../lib/myFetch";

const VerifyBtn = ({ message, signature }) => {
  // submit verify request
  const handleVerify = async () => {
    const { verified } = await myFetch("/api/verify", { message, signature });
    if (verified) {
      notification.success({
        message: `Verified: ${verified}`,
        description: "The signature is valid.",
      });
    } else {
      notification.error({
        message: "Error",
        description: "The signature is invalid.",
      });
    }
  };

  return (
    <Button type="primary" size="small" onClick={handleVerify}>
      Verify
    </Button>
  );
};

export default VerifyBtn;
