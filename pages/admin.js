import { useState } from "react";

export default function Admin() {
  const [token, setToken] = useState("");
  const [form, setForm] = useState({});

  const login = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (data.token) setToken(data.token);
    else alert("Sai tài khoản");
  };

  const addProduct = async () => {
    await fetch("/api/products", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(form)
    });
    alert("Đã thêm");
  };

  if (!token) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Login Admin</h2>
        <input placeholder="User" onChange={e => setForm({...form, username:e.target.value})}/>
        <input placeholder="Pass" type="password" onChange={e => setForm({...form, password:e.target.value})}/>
        <button onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Panel</h2>
      <input placeholder="Tên SP" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Giá" onChange={e => setForm({...form, price:e.target.value})}/>
      <input placeholder="Link ảnh" onChange={e => setForm({...form, image:e.target.value})}/>
      <button onClick={addProduct}>Thêm sản phẩm</button>
    </div>
  );
}
