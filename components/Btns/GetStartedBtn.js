import { Button, notification, Tooltip } from "antd";
import Link from "next/link";
import { myFetch } from "../../lib/myFetch";

const GetStartedBtn = () => {
  const handleStarted = async () => {
    const data = await myFetch("/api/started", null, { method: "GET" });
    if (!data) {
      notification.success({
        message: "Key pair generated successfully!",
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
