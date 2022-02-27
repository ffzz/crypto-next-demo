import { List } from "antd";
import { useState } from "react";
import styles from "../../styles/Playground.module.css";
import { DeleteBtn, SignBtn, VerifyBtn } from "../Btns";

const MessageList = ({ list = [], setList = () => {} }) => {
  const [signature, setSignature] = useState(null);

  return (
    <List
      className={styles.list}
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(message, index) => (
        <List.Item
          actions={[
            <SignBtn {...{ message, setSignature }} key={message + "1"} />,
            <VerifyBtn {...{ message, signature }} key={message + "2"} />,
            <DeleteBtn {...{ setList, index, list }} key={message + "3"} />,
          ]}
        >
          {message}
        </List.Item>
      )}
    />
  );
};

export default MessageList;
