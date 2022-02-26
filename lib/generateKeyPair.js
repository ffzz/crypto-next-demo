import { KeyObject, webcrypto } from "crypto";
const { subtle } = webcrypto;

export const generateKeyPair = async () => {
  const { publicKey, privateKey } = await subtle.generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-256",
    },
    true,
    ["sign", "verify"]
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
  return { pubKey, priKey };
};
