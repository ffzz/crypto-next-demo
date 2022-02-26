import { base64ToArrayBuffer } from "../../lib/importKeys";
import { readLocalKeys } from "../../lib/readLocalKeys";
import { verifySignature } from "../../lib/verifySignature";

export default async function handler(req, res) {
  const { message, signature } = req.body;
  if (!!message && !!signature) {
    try {
      const sig = base64ToArrayBuffer(signature);
      console.log({ buffer: sig });
      const { publicKey } = await readLocalKeys();
      const verified = await verifySignature({
        message,
        publicKey,
        signature: sig,
      });
      if (verified) {
        return res
          .status(200)
          .json({ code: 200, msg: "verify successfully!", verified });
      } else {
        return res
          .status(400)
          .json({ code: 400, msg: "verify failed!", verified });
      }
    } catch (error) {
      console.error(error);
    }
  } else {
    return res
      .status(400)
      .json({ code: 400, msg: "The message and signature are required!" });
  }
}
