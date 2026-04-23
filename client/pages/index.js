import { useEffect, useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    {id:1,name:"iPhone 17 Pro Max 256GB",price:"35.800.000đ"},
    {id:2,name:"iPhone 17 Pro Max 512GB",price:"42.900.000đ"},
    {id:3,name:"iPhone 17 Pro 256GB",price:"34.400.000đ"},
    {id:4,name:"iPhone 17 Pro 512GB",price:"36.200.000đ"},
  ];

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const addToCart = (p) => {
    const newCart = [...cart, p];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Đã thêm vào giỏ 🛒");
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-yellow-400">
          NGUYỄN AN STORE
        </h1>

        <a href="/cart" className="bg-yellow-400 text-black px-4 py-2 rounded">
          🛒 {cart.length}
        </a>
      </div>

      {/* BANNER */}
      <div className="text-center py-10 bg-gradient-to-r from-black to-gray-900">
        <h2 className="text-3xl font-bold text-yellow-400">
          CHUYÊN ĐIỆN THOẠI CHÍNH HÃNG
        </h2>
        <p className="text-gray-400 mt-2">
          Giá tốt - Uy tín - Bảo hành rõ ràng
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="p-5 grid grid-cols-2 md:grid-cols-4 gap-5">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-gray-900 p-3 rounded-xl shadow hover:scale-105 transition"
          >
            <img
              src="https://i.imgur.com/6Iej2c3.png"
              className="rounded mb-3"
            />

            <h3 className="text-sm">{p.name}</h3>
            <p className="text-yellow-400 font-bold">{p.price}</p>

            <button
              onClick={() => addToCart(p)}
              className="mt-2 w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-300"
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 py-5">
        Uy tín tạo nên thương hiệu
      </div>

    </div>
  );
}
