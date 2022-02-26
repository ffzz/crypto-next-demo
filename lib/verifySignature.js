import { importPublicKey } from "./importKeys.js";
import { webcrypto } from "crypto";
const { subtle } = webcrypto;

export const verifySignature = async ({ publicKey, message, signature }) => {
  try {
    const key = await importPublicKey(publicKey);
    return await subtle.verify(
      {
        name: "ECDSA",
        hash: { name: "SHA-256" },
      },
      key,
      signature,
      Buffer.from(message)
    );
  } catch (error) {
    console.error("error", error);
  }
};
