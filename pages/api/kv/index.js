export default function handler(req, res) {
  if (req.method === "GET") {
    // GET /api/kv
  }

  res.status(200).json({ name: "John Doe" });
}
