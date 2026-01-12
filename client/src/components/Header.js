import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">Shopee</div>
        <input
          className="search-bar"
          type="text"
          placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
        />
        <div className="header-actions">
          <button className="btn">Đăng Ký</button>
          <button className="btn">Đăng Nhập</button>
        </div>
      </div>
      <nav className="header-nav">
        <span>Shopee Siêu Rẻ</span>
        <span>Deal Từ 1.000Đ</span>
        <span>Fash Sale</span>
        <span>Shopee Style</span>
        <span>Shopee Voucher 30%</span>
      </nav>
    </header>
  );
}

export default Header;
