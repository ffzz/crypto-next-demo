import { webcrypto } from "crypto";
import { importPublicKey } from "./importKeys.js";
const { subtle } = webcrypto;

/**
 *
 * * verify a signature with a publicKey
 */
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
      Buffer.from(message),
    );
  } catch (error) {
    console.error("error", error);
  }
};
