import { readLocalKeys } from "../../lib/readLocalKeys";
import { signMessage } from "../../lib/signMessage";

export default async function handler(req, res) {
  const { message } = req.body;
  console.log("sign api", message);
  if (req.method == "POST") {
    if (!!message) {
      try {
        const { privateKey } = await readLocalKeys();
        const signature = await signMessage({ message, privateKey });
        const sig = Buffer.from(signature).toString("base64");
        console.log({ signature: sig });

        return res
          .status(200)
          .json({ code: 200, msg: "sign successfully!", signature: sig });
      } catch (error) {
        console.error(error);
      }
    } else {
      return res
        .status(400)
        .json({ code: 400, msg: "The message is required!", message });
    }
  }
}
