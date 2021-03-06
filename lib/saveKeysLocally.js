import { existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { resolve } from "path";

/**
 * * Save keys locally
 * * if the directory doesn't exist, create it
 * * if the key exist, replace it
 */
export const saveKeysLocally = async ({ pubKey, priKey }) => {
  try {
    !existsSync(resolve("./keys")) && (await mkdir(resolve("./keys")));
    await writeFile(resolve("./keys/pubKey.pem"), pubKey);
    await writeFile(resolve("./keys/priKey.pem"), priKey);
  } catch (error) {
    console.error("error", error);
  }
};
