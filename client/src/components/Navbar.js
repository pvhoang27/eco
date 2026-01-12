import React from "react";

const Navbar = ({ user, onLoginClick, cartCount }) => (
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
          onClick={onLoginClick}
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
        🛒 Giỏ hàng ({cartCount})
      </span>
    </div>
  </nav>
);

export default Navbar;
