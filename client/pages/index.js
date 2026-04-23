export default function Home() {
  const products = [
    {name:"iPhone 17 Pro Max 256GB",price:"35.800.000đ",hot:true},
    {name:"iPhone 17 Pro Max 512GB",price:"42.900.000đ",hot:true},
    {name:"iPhone 17 Pro 256GB",price:"34.400.000đ"},
    {name:"iPhone 17 Pro 512GB",price:"36.200.000đ"},
    {name:"iPhone 17 256GB",price:"24.400.000đ"},
  ];

  return (
    <div style={{background:"#000",color:"#fff",fontFamily:"Arial"}}>
      
      {/* HEADER */}
      <div style={{padding:20,borderBottom:"1px solid #333"}}>
        <h1 style={{color:"gold",margin:0}}>NGUYỄN AN STORE</h1>
        <small>Uy tín tạo nên thương hiệu</small>
      </div>

      {/* BANNER */}
      <div style={{
        padding:40,
        background:"linear-gradient(to right,#000,#222)",
        textAlign:"center"
      }}>
        <h2 style={{color:"gold",fontSize:32}}>CHUYÊN ĐIỆN THOẠI CHÍNH HÃNG</h2>
        <p>Giá tốt - Uy tín - Bảo hành rõ ràng</p>
      </div>

      {/* SẢN PHẨM */}
      <div style={{padding:20}}>
        <h2>🔥 Sản phẩm HOT</h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
          gap:20
        }}>
          {products.map((p,i)=>(
            <div key={i} style={{
              background:"#111",
              padding:15,
              borderRadius:12,
              boxShadow:"0 0 10px rgba(255,215,0,0.2)"
            }}>
              {p.hot && (
                <span style={{
                  background:"red",
                  padding:"3px 6px",
                  borderRadius:5,
                  fontSize:12
                }}>
                  HOT 🔥
                </span>
              )}

              <img 
                src="https://via.placeholder.com/200"
                style={{
                  width:"100%",
                  margin:"10px 0",
                  borderRadius:10
                }}
              />

              <h3 style={{margin:"10px 0"}}>{p.name}</h3>

              <p style={{
                color:"gold",
                fontWeight:"bold"
              }}>
                {p.price}
              </p>

              <button
                onClick={()=>{
                  const name = prompt("Tên của bạn:");
                  const phone = prompt("Số điện thoại:");
                  alert("Đặt hàng thành công!\nChuyển khoản ACB: 18896211 - NGUYEN VAN AN");
                }}
                style={{
                  width:"100%",
                  background:"gold",
                  border:"none",
                  padding:10,
                  borderRadius:8,
                  cursor:"pointer"
                }}
              >
                Mua ngay
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* THU CŨ */}
      <div style={{
        margin:20,
        padding:20,
        border:"1px solid gold",
        borderRadius:10,
        textAlign:"center"
      }}>
        <h2 style={{color:"gold"}}>Thu cũ đổi mới</h2>
        <p>Lên đời dễ dàng - Giá tốt</p>
      </div>

      {/* CHAT */}
      <div style={{position:"fixed",bottom:20,right:20}}>
        <a href="https://m.me/yourpage">💬 Messenger</a><br/>
        <a href="https://zalo.me/0902519336">📞 Zalo</a>
      </div>

    </div>
  );
}
