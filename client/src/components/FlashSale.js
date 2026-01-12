import React from "react";
import "./FlashSale.css";

function FlashSale() {
  return (
    <div className="flash-sale">
      <h2>FLASH SALE</h2>
      <div className="flash-sale-banner">
        <span>Giảm giá sốc chỉ còn 1.000Đ!</span>
        <span>Deal Hot Giờ Vàng</span>
        <span>Shopee Style Voucher 30%</span>
      </div>
      {/* Thêm sản phẩm flash sale ở đây nếu muốn */}
    </div>
  );
}

export default FlashSale;
