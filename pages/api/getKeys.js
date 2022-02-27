import { readLocalKeys } from "../../lib/readLocalKeys";

export default async function handler(_, res) {
  const { publicKey = "", privateKey = "" } = await readLocalKeys();
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      publicKey,
      privateKey,
    })
  );
}
