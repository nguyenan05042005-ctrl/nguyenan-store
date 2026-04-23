import { useState } from "react";

export default function Admin(){
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");

  const addProduct = async ()=>{
    await fetch("/api/products",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({name,price,image:"https://i.imgur.com/6Iej2c3.png"})
    });

    alert("Đã thêm sản phẩm");
  };

  return(
    <div style={{padding:20}}>
      <h1>Admin</h1>

      <input placeholder="Tên" onChange={e=>setName(e.target.value)} />
      <input placeholder="Giá" onChange={e=>setPrice(e.target.value)} />

      <button onClick={addProduct}>
        Thêm sản phẩm
      </button>
    </div>
  );
}
