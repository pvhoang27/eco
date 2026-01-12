import React from "react";

const Banner = () => (
  <div
    style={{
      width: "100%",
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0",
      marginBottom: 24,
    }}
  >
    <img
      src="https://cf.shopee.vn/file/vn-50009109-7b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e_xxhdpi"
      alt="Shopee Banner"
      style={{
        width: "100%",
        maxWidth: 1200,
        borderRadius: 8,
        objectFit: "cover",
      }}
    />
  </div>
);

export default Banner;
