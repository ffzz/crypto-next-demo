import { Button, Input, message as msg } from "antd";
import { useState, useRef } from "react";
import styles from "../../styles/Input.module.css";

function InputMessage({ list = [], setList = () => {} }) {
  const [message, setMessage] = useState("");
  const inputRef = useRef('')
  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const submit = (e) => {
    if(!!message ) {
      setList([...list, message]);
      setMessage('')
      inputRef.current.setValue('')
    } else {
      msg.warn("message can not be empty!")
    }

  };

  return (
    <div className={styles.container}>
      <Input
        ref={inputRef}
        showCount
        maxLength={20}
        allowClear
        onChange={onChange}
        onPressEnter={submit}
      />
      <Button type="primary" onClick={submit} className={styles.submit}>
        Submit
      </Button>
    </div>
  );
}

export default InputMessage;
