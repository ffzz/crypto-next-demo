import { Card } from "antd";
import { useState } from "react";
import InputMessage from "../../components/InputMessage";
import MessageList from "../../components/MessageList";
import { readLocalKeys } from "../../lib/readLocalKeys";
import styles from "../../styles/Playground.module.css";

/**
 * * Page: playground
 */
const Playground = ({ publicKey = "", privateKey = "" }) => {
  const [list, setList] = useState([]);
  return (
    <div className={styles.layout}>
      {!!publicKey && !!privateKey && (
        <Card className={styles.card}>
          <h4>Public Key is: </h4>
          <p>{publicKey}</p>
          <h4>Private Key is: </h4>
          <p>{privateKey}</p>
        </Card>
      )}
      <InputMessage {...{ list, setList }} />
      <MessageList {...{ list, setList }} />
    </div>
  );
};

export default Playground;

export const getServerSideProps = async () => {
  const { publicKey = "", privateKey = "" } = await readLocalKeys();
  return {
    props: {
      publicKey,
      privateKey,
    },
  };
};
