// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const lib = require("lib")({ token: process.env.AUTOCODE_TOKEN });

export default async function handler(req, res) {
  // const { key, value, ttl } = req.query;
  const body = req.body;
  const { key, value, ttl } = body;
  let result = await lib.utils.kv["@release"].set({
    key: key,
    value: value,
  });
  res.status(200).json({ key: key, value: value, ttl: ttl, data: result });
}
