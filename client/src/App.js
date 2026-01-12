import React, { useState } from "react";
import "./App.css";

const sampleProducts = [
  {
    id: 1,
    name: "Áo thun Shopee",
    price: 120000,
    image: "https://via.placeholder.com/120",
  },
  {
    id: 2,
    name: "Giày thể thao",
    price: 350000,
    image: "https://via.placeholder.com/120",
  },
  {
    id: 3,
    name: "Túi xách nữ",
    price: 220000,
    image: "https://via.placeholder.com/120",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLogin = () => {
    setUser({ name: "Khách hàng" });
  };

  return (
    <div
      className="App"
      style={{
        fontFamily: "Roboto, Arial, sans-serif",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          background: "#ee4d2d",
          padding: "1rem",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Shopee</div>
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "none",
            width: "300px",
          }}
        />
        <div>
          {user ? (
            <span>Xin chào, {user.name}</span>
          ) : (
            <button
              onClick={handleLogin}
              style={{
                background: "#fff",
                color: "#ee4d2d",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Đăng nhập
            </button>
          )}
          <span style={{ marginLeft: "2rem", cursor: "pointer" }}>
            🛒 Giỏ hàng ({cart.length})
          </span>
        </div>
      </nav>
      <main
        style={{
          maxWidth: "900px",
          margin: "2rem auto",sdfsfds
          background: "#fff",sdfds
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          padding: "2rem",
        }}
      >
        <h2>Sản phẩm nổi bật</h2>
        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {sampleProducts
            .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "8px",
                  padding: "1rem",
                  width: "200px",
                  textAlign: "center",
                  background: "#fafafa",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <h3 style={{ fontSize: "1.1rem", margin: "1rem 0 0.5rem" }}>
                  {product.name}
                </h3>
                <div
                  style={{
                    color: "#ee4d2d",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product.price.toLocaleString()}đ
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{
                    background: "#ee4d2d",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Thêm vào giỏ
                </button>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
