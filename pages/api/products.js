import { connectDB } from "../../lib/db";
import Product from "../../models/Product";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const data = await Product.find();
    return res.json(data);
  }

  if (req.method === "POST") {
    const product = await Product.create(req.body);
    return res.json(product);
  }

  if (req.method === "DELETE") {
    await Product.findByIdAndDelete(req.body.id);
    return res.json({ ok: true });
  }
}
