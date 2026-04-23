import { useState, useEffect } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);

  const products = [
    {id:1,name:"iPhone 17 Pro Max 256GB",price:"35.800.000đ"},
    {id:2,name:"iPhone 17 Pro Max 512GB",price:"42.900.000đ"},
    {id:3,name:"iPhone 17 Pro 256GB",price:"34.400.000đ"},
    {id:4,name:"iPhone 17 Pro 512GB",price:"36.200.000đ"},
    {id:5,name:"iPhone 17 256GB",price:"24.400.000đ"},
  ];

  // load giỏ hàng
  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  },[]);

  // thêm vào giỏ
  const addToCart = (product)=>{
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Đã thêm vào giỏ 🛒");
  };

  return (
    <div style={{background:"#000",color:"#fff",padding:20}}>

      <h1 style={{color:"gold"}}>NGUYỄN AN STORE</h1>
      <p>Uy tín tạo nên thương hiệu</p>

      <a href="/cart" style={{color:"gold"}}>
        🛒 Giỏ hàng ({cart.length})
      </a>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
        gap:20,
        marginTop:20
      }}>
        {products.map(p=>(
          <div key={p.id} style={{
            background:"#111",
            padding:15,
            borderRadius:10
          }}>
            <img src="https://i.imgur.com/6Iej2c3.png" style={{width:"100%"}}/>
            <h3>{p.name}</h3>
            <p style={{color:"gold"}}>{p.price}</p>

            <button
              onClick={()=>addToCart(p)}
              style={{
                background:"gold",
                border:"none",
                padding:10,
                width:"100%"
              }}
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}
