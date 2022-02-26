import { Button, Tooltip } from "antd";
import Link from "next/link";

const GetStartedBtn = () => {
  const handleStarted = () => {
    fetch("/api/started");
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
