import { Button, List } from "antd";
import SignBtn from "../SignBtn";
import VerifyBtn from "../VerifyBtn";
import styles from "../../styles/Playground.module.css";

const MessageList = ({ list = [], setList = () => {} }) => {
  const handleDelete = (message) => {
    console.log(message);
    setList(list.filter((item) => message !== item));
  };
  return (
    <List
      className={styles.list}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(message) => (
        <List.Item
          actions={[
            <SignBtn msg={message} key={message + "1"} />,
            <VerifyBtn msg={message} key={message + "2"} />,
            <Button
              onClick={(message) => handleDelete(message)}
              key={message + "33"}
              size="small"
              type="danger"
            >
              Delete
            </Button>,
          ]}
        >
          {message}
        </List.Item>
      )}
    />
  );
};

export default MessageList;
