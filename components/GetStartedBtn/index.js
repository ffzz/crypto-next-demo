import { Button, notification, Tooltip } from "antd";
import Link from "next/link";

const GetStartedBtn = () => {
  const handleStarted = async () => {
    const res = await fetch("/api/started");
    const { code, msg } = await res.json();
    if (code === 200) {
      notification.success({
        message: msg,
      });
    }
  };
  return (
    <Link href="./playground" passHref>
      <Tooltip title="Click to generate key pair">
        <Button type="primary" size="large" onClick={handleStarted}>
          Start Here!
        </Button>
      </Tooltip>
    </Link>
  );
};

export default GetStartedBtn;
