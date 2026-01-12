import React from "react";
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Áo Thun Nam",
    price: 120000,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbkq-lp6w2wq2j7jv7a",
  },
  {
    id: 2,
    name: "Giày Thể Thao",
    price: 350000,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbkq-lp6w2wq2j7jv7b",
  },
  {
    id: 3,
    name: "Đồng Hồ Nam",
    price: 450000,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbkq-lp6w2wq2j7jv7c",
  },
  {
    id: 4,
    name: "Túi Xách Nữ",
    price: 220000,
    image:
      "https://down-vn.img.susercontent.com/file/sg-11134201-7rbkq-lp6w2wq2j7jv7d",
  },
];

function ProductList() {
  return (
    <div className="product-list">
      <h2>Sản phẩm nổi bật</h2>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">
                {product.price.toLocaleString()}đ
              </div>
              <button className="add-cart-btn">Thêm vào giỏ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
