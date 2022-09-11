// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const lib = require("lib")({ token: process.env.AUTOCODE_TOKEN });

export default async function handler(req, res) {
  const kvList = await lib.utils.kv["@release"].entries();
  //sort the kvList by key
  kvList.sort((a, b) => {
    let keyA = a[0].toUpperCase();
    let keyB = b[0].toUpperCase();
    if (keyA < keyB) {
      return -1;
    } else if (keyA > keyB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  res.status(200).json(kvList);
}
