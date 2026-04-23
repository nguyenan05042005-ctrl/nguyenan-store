import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const token = jwt.sign({ user: username }, process.env.JWT_SECRET);
    return res.json({ token });
  }

  res.status(401).json({ error: "Sai tài khoản" });
}
