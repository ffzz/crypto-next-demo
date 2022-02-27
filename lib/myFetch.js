import { notification } from "antd";

export const myFetch = async (url, body, options = {}) => {
  const defaultOption = {
    method: "POST",
    body: body && JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const opt = { ...defaultOption, ...options };
  try {
    const res = await fetch(url, opt);
    const { code, msg, data } = await res.json();
    if (code === 200) {
      return data;
    } else {
      const errorMsg = `Code: ${code};Error: ${msg}`;
      notification.error({
        message: "Error",
        description: errorMsg,
      });
      const error = new Error(msg);
      error.response = response;
      throw error;
    }
  } catch (error) {
    console.error(error);
  }
};
