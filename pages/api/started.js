// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generateKeyPair } from "../../lib/generateKeyPair";
import { saveKeysLocally } from "../../lib/saveKeysLocally";

/**
 * * backend api handler to generate key pair
 */
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { pubKey, priKey } = await generateKeyPair();
      await saveKeysLocally({ pubKey, priKey });
      return res.status(201).json({
        code: 200,
        msg: "Key pair generated successfully!",
      });
    } catch (error) {
      console.error(error);
    }
  }
}
