import React from 'react';

const categories = [
  { name: 'Thời Trang Nam', icon: '👔' },
  { name: 'Điện Thoại & Máy Tính Bảng', icon: '📱' },
  { name: 'Thiết Bị Điện Tử', icon: '💻' },
  { name: 'Máy Ảnh & Máy Quay Phim', icon: '📷' },
  { name: 'Đồng Hồ', icon: '⌚' },
  { name: 'Giày Dép Nam', icon: '👞' },
  { name: 'Thiết Bị Gia Dụng', icon: '🏠' },
  { name: 'Thể Thao & Du Lịch', icon: '🏀' },
  { name: 'Ô Tô & Xe Máy', icon: '🏍️' },
];

const CategoryBar = () => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: 32, background: '#fff', padding: '16px 0', borderRadius: 8, marginBottom: 24 }}>
    {categories.map((cat, idx) => (
      <div key={idx} style={{ textAlign: 'center', minWidth: 90 }}>
        <div style={{ fontSize: 32 }}>{cat.icon}</div>
        <div style={{ fontSize: 14, marginTop: 4 }}>{cat.name}</div>
      </div>
    ))}
  </div>
);

export default CategoryBar;
