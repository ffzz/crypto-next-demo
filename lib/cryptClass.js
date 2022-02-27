import { KeyObject, webcrypto } from "crypto";
import { existsSync } from "fs";
import { mkdir, readFile } from "fs/promises";
import { resolve } from "path";
import { importPrivateKey, importPublicKey } from "./importKeys";

// This class is not used in the project, just for practice.
export default class crypt {
  constructor() {
    this.subtle = webcrypto.subtle;
  }
  // To generate key pair for ECDSA algorithm with P-256 curve
  async generateKeyPair() {
    const { publicKey, privateKey } = await this.subtle.generateKey(
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
  }
  // Save keys locally
  async saveKeysLocally({ pubKey, priKey }) {
    try {
      !existsSync(resolve("./keys")) && (await mkdir(resolve("./keys")));
      await writeFile(resolve("./keys/pubKey.pem"), pubKey);
      await writeFile(resolve("./keys/priKey.pem"), priKey);
    } catch (error) {
      console.error("error", error);
    }
  }
  // Read keys from local directory "./keys"
  async readLocalKeys() {
    try {
      const publicKey = await readFile(resolve("./keys/pubKey.pem"), "utf8");
      const privateKey = await readFile(resolve("./keys/priKey.pem"), "utf8");

      return {
        publicKey,
        privateKey,
      };
    } catch (error) {
      console.error("error", error);
    }
  }
  // sign a message with a private key
  async sign({ message, privateKey }) {
    try {
      const key = await importPrivateKey(privateKey);
      const signature = await this.subtle.sign(
        { name: "ECDSA", hash: "SHA-256" },
        key,
        Buffer.from(message),
      );
      console.log({ signature });
      return signature;
    } catch (error) {
      console.error("error", error);
    }
  }
  // verify a signature with a publicKey
  async verify({ publicKey, message, signature }) {
    try {
      const key = await importPublicKey(publicKey);
      return await this.verify(
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
  }
}
