// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const lib = require("lib")({ token: process.env.AUTOCODE_TOKEN });

export default async function handler(req, res) {
  const { key } = req.query;
  let result = await lib.utils.kv["@release"].clear({
    key: key,
  });

  res.status(200).json({ key: key, data: result });
}
