import { Button } from "antd";
import styles from "../../styles/Playground.module.css";

const SignBtn = ({ message }) => {
  const handleSign = () => {};
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
