export default function Home() {
  const products = [
    {name:"iPhone 17 Pro Max 256GB",price:"35.800.000đ",hot:true},
    {name:"iPhone 17 Pro Max 512GB",price:"42.900.000đ",hot:true},
    {name:"iPhone 17 Pro 256GB",price:"34.400.000đ"},
    {name:"iPhone 17 Pro 512GB",price:"36.200.000đ"},
    {name:"iPhone 17 256GB",price:"24.400.000đ"},
  ];

  return (
    <div style={{background:"#000",color:"#fff",padding:20}}>
      <h1 style={{color:"gold"}}>NGUYỄN AN STORE</h1>
      <p>Uy tín tạo nên thương hiệu</p>

      <h2>🔥 Thu cũ đổi mới</h2>

      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10}}>
        {products.map((p,i)=>(
          <div key={i} style={{background:"#111",padding:10,borderRadius:10}}>
            {p.hot && <span style={{color:"red"}}>HOT 🔥</span>}
            <h3>{p.name}</h3>
            <p>{p.price}</p>
           <button onClick={()=>{
  const name = prompt("Tên của bạn:");
  const phone = prompt("Số điện thoại:");
  alert("Đặt hàng thành công!\\nChuyển khoản ACB: 18896211 - NGUYEN VAN AN");
}} style={{background:"gold",padding:5}}>
  Mua ngay
</button>
          </div>
        ))}
      </div>

      <div style={{position:"fixed",bottom:20,right:20}}
        <a href="https://zalo.me/0902519336">📞 Zalo</a>
      </div>
    </div>
  );
}

