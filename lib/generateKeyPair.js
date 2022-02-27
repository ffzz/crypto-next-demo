import { KeyObject, webcrypto } from "crypto";
const { subtle } = webcrypto;
/**
 * * To generate key pair for ECDSA algorithm with P-256 curve
 */
export const generateKeyPair = async () => {
  const { publicKey, privateKey } = await subtle.generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign", "verify"],
  );

  const pubKeyObj = KeyObject.from(publicKey);
  const priKeyObj = KeyObject.from(privateKey);

  const pubKey = pubKeyObj
    .export({
      type: "spki",
      format: "pem",
    })
    .toString();
  const priKey = priKeyObj
    .export({
      type: "pkcs8",
      format: "pem",
    })
    .toString();
  console.log({
    "generated public Key": pubKey,
    "Generated private Key": priKey,
  });
  return { pubKey, priKey };
};
