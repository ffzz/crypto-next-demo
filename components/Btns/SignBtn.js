import { Button, notification } from "antd";
import { myFetch } from "../../lib/myFetch";

import styles from "../../styles/Playground.module.css";

const SignBtn = ({ message, setSignature }) => {
  const handleSign = async () => {
    const { signature } = await myFetch("/api/sign", { message });
    if (signature) {
      setSignature(signature);
      notification.success({
        message: "Signed successfully!",
        description: `Signature: ${signature}`,
      });
    }
  };

  return (
    <Button
      type="primary"
      size="small"
      onClick={handleSign}
      className={styles.sign}
    >
      Sign
    </Button>
  );
};

export default SignBtn;
