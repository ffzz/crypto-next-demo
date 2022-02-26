import { readFile } from "fs/promises";
import { resolve } from "path";

export const readLocalKeys = async () => {
  try {
    const publicKey = await await readFile(
      resolve("./keys/pubKey.pem"),
      "utf8"
    );
    const privateKey = await await readFile(
      resolve("./keys/priKey.pem"),
      "utf8"
    );

    return {
      publicKey,
      privateKey,
    };
  } catch (error) {
    console.error("error", error);
  }
};
