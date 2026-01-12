import React, { useState } from "react";

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "3rem auto",
        background: "#fff",
        padding: "2rem",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      }}
    >
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 12, padding: 8 }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 12, padding: 8 }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#ee4d2d",
            color: "#fff",
            border: "none",
            padding: "0.75rem",
            borderRadius: 4,
            fontWeight: "bold",
          }}
        >
          Đăng nhập
        </button>
      </form>
      <div style={{ marginTop: 16, textAlign: "center" }}>
        <span>Bạn chưa có tài khoản? </span>
        <button
          onClick={onSwitchToRegister}
          style={{
            background: "none",
            color: "#ee4d2d",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default Login;
