import { Button, notification } from "antd";
import { usePostMessage } from "../../hooks/useSignMessage";
import styles from "../../styles/Playground.module.css";

const SignBtn = ({ message, setSignature }) => {
  const postMessage = usePostMessage(message);
  const handleSign = async () => {
    console.log("signing");
    try {
      const res = await postMessage();
      const { signature, msg, code } = await res.json();
      if ((code = 200)) {
        setSignature(signature);
        notification.success({
          message: msg,
          description: `Signature: ${signature}`,
        });
      } else {
        const errorMsg = `Code: ${code};
                  Error: ${msg}`;
        notification.error({
          message: "Error",
          description: errorMsg,
        });
      }
    } catch (error) {
      console.error(error);
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
