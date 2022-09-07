// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const lib = require("lib")({ token: process.env.AUTOCODE_TOKEN });

export default async function handler(req, res) {
  const kvList = await lib.utils.kv["@release"].entries();
  res.status(200).json({ list: kvList });
}
