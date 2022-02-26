import { notification } from "antd";
import { useCallback, useState } from "react";

export const usePostMessage = (message) => {
  const postMessage = useCallback(async () => {
    try {
      return fetch("/api/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });
    } catch (error) {
      console.error(error);
    }
  }, [message]);
  return postMessage;
};
