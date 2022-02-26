import { useCallback } from "react";

export const useVerifySignature = ({ signature, message }) => {
  const verifySignature = useCallback(async () => {
    try {
      return fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ signature, message }),
      });
    } catch (error) {
      console.error(error);
    }
  }, [signature, message]);
  return verifySignature;
};
