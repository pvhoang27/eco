import React from "react";

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

const Home = ({ onAddToCart }) => (
  <main
    style={{
      maxWidth: "900px",
      margin: "2rem auto",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      padding: "2rem",
    }}
  >
    <h2>Sản phẩm nổi bật</h2>
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {sampleProducts.map((product) => (
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
            onClick={() => onAddToCart(product)}
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
);

export default Home;
