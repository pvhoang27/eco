import React from "react";

const products = [
  {
    id: 1,
    name: "Áo thun Shopee",
    price: 120000,
    image: "https://via.placeholder.com/180",
  },
  {
    id: 2,
    name: "Giày thể thao",
    price: 350000,
    image: "https://via.placeholder.com/180",
  },
  {
    id: 3,
    name: "Túi xách nữ",
    price: 220000,
    image: "https://via.placeholder.com/180",
  },
  {
    id: 4,
    name: "Đồng hồ thời trang",
    price: 500000,
    image: "https://via.placeholder.com/180",
  },
  {
    id: 5,
    name: "Tai nghe Bluetooth",
    price: 150000,
    image: "https://via.placeholder.com/180",
  },
  {
    id: 6,
    name: "Bình giữ nhiệt",
    price: 90000,
    image: "https://via.placeholder.com/180",
  },
];

const ProductSlider = ({ onAddToCart }) => (
  <div
    style={{
      background: "#fff",
      borderRadius: 8,
      padding: 24,
      marginBottom: 24,
    }}
  >
    <h2 style={{ marginBottom: 16 }}>Gợi ý hôm nay</h2>
    <div style={{ display: "flex", gap: 24, overflowX: "auto" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            minWidth: 200,
            border: "1px solid #eee",
            borderRadius: 8,
            padding: 12,
            textAlign: "center",
            background: "#fafafa",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: 180,
              height: 180,
              objectFit: "cover",
              borderRadius: 8,
            }}
          />
          <h3 style={{ fontSize: 16, margin: "12px 0 6px" }}>{product.name}</h3>
          <div
            style={{ color: "#ee4d2d", fontWeight: "bold", marginBottom: 8 }}
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
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Thêm vào giỏ
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ProductSlider;
