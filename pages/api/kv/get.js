// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const lib = require("lib")({ token: process.env.AUTOCODE_TOKEN });

export default async function handler(req, res) {
  const { key, defaultValue } = req.query;
  let obj = { key: key };
  if (defaultValue) {
    obj.defaultValue = defaultValue;
  }

  let result = await lib.utils.kv["@release"].get(obj);

  res
    .status(200)
    .json({
      key: key,
      defaultValue: defaultValue ? defaultValue : null,
      data: result,
    });
}
