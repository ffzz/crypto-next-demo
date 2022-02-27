import { readFile } from "fs/promises";
import { resolve } from "path";

/**
 *
 * * Read keys from local directory "./keys"
 */
export const readLocalKeys = async () => {
  try {
    if (
      !existsSync(resolve("./keys/pubKey.pem")) ||
      !existsSync(resolve("./keys/priKey.pem"))
    ) {
      return {
        publicKey: "",
        privateKey: "",
      };
    }
    const publicKey = await await readFile(
      resolve("./keys/pubKey.pem"),
      "utf8",
    );
    const privateKey = await await readFile(
      resolve("./keys/priKey.pem"),
      "utf8",
    );

    return {
      publicKey,
      privateKey,
    };
  } catch (error) {
    console.error("error", error);
  }
};
