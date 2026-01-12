import React from "react";
import "./CategoryMenu.css";

const categories = [
  { name: "Thời Trang Nam", icon: "👕" },
  { name: "Điện Thoại & Phụ Kiện", icon: "📱" },
  { name: "Thiết Bị Điện Tử", icon: "🖥️" },
  { name: "Máy Tính & Laptop", icon: "💻" },
  { name: "Máy Ảnh & Máy Quay Phim", icon: "📷" },
  { name: "Đồng Hồ", icon: "⌚" },
  { name: "Giày Dép Nam", icon: "👞" },
  { name: "Thiết Bị Điện Gia Dụng", icon: "🫖" },
  { name: "Thể Thao & Du Lịch", icon: "⚽" },
  { name: "Ô Tô & Xe Máy & Xe Đạp", icon: "🛵" },
  { name: "Thời Trang Nữ", icon: "👗" },
  { name: "Mẹ & Bé", icon: "🧸" },
  { name: "Nhà Cửa & Đời Sống", icon: "🏠" },
  { name: "Sắc Đẹp", icon: "💄" },
  { name: "Sức Khỏe", icon: "💊" },
  { name: "Giày Dép Nữ", icon: "👠" },
  { name: "Túi Ví Nữ", icon: "👜" },
  { name: "Phụ Kiện & Trang Sức Nữ", icon: "💍" },
  { name: "Bách Hóa Online", icon: "🍫" },
  { name: "Nhà Sách Online", icon: "📚" },
];

function CategoryMenu() {
  return (
    <div className="category-menu">
      <h2>DANH MỤC</h2>
      <div className="categories">
        {categories.map((cat, idx) => (
          <div className="category-item" key={idx}>
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
