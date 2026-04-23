import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);

    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const addToCart = (p) => {
    const newCart = [...cart, p];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div style={{ background: "#111", color: "#fff", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ color: "gold" }}>NGUYỄN AN STORE</h1>

      <h2>🔥 Sản phẩm HOT</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
        {products.map(p => (
          <div key={p._id} style={{ background: "#222", padding: 15, borderRadius: 10 }}>
            <img src={p.image} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>{p.price.toLocaleString()}đ</p>
            <button onClick={() => addToCart(p)} style={{ background: "gold", border: 0, padding: 10 }}>
              Mua ngay
            </button>
          </div>
        ))}
      </div>

      <h2>🛒 Giỏ hàng ({cart.length})</h2>
      {cart.map((c, i) => (
        <div key={i}>{c.name}</div>
      ))}
    </div>
  );
}
