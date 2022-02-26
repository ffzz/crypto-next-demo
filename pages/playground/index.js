import { useState } from "react";
import InputMessage from "../../components/InputMessage";
import MessageList from "../../components/MessageList";
import styles from "../../styles/Playground.module.css";

const Playground = () => {
  const [list, setList] = useState([]);
  return (
    <div className={styles.layout}>
      <InputMessage {...{ list, setList }} />
      <MessageList {...{ list, setList }} />
    </div>
  );
};

export default Playground;
