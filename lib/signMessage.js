import { importPrivateKey } from "./importKeys.js";
import { webcrypto } from "crypto";
const { subtle } = webcrypto;

/**
 * * sign a message with a private key
 * @returns [bufferArray] signature
 */
export const signMessage = async ({ message, privateKey }) => {
  try {
    const key = await importPrivateKey(privateKey);
    const signature = await subtle.sign(
      { name: "ECDSA", hash: "SHA-256" },
      key,
      Buffer.from(message),
    );
    console.log({ signature });
    return signature;
  } catch (error) {
    console.error("error", error);
  }
};
