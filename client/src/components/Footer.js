import React from 'react';

const Footer = () => (
  <footer style={{ background: '#f5f5f5', color: '#888', textAlign: 'center', padding: '2rem 0', marginTop: 40 }}>
    <div>© {new Date().getFullYear()} Shopee Clone. All rights reserved.</div>
    <div style={{ marginTop: 8, fontSize: 13 }}>Dự án mô phỏng giao diện Shopee cho mục đích học tập.</div>
  </footer>
);

export default Footer;
