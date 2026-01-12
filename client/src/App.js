
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategoryBar from "./components/CategoryBar";
import ProductSlider from "./components/ProductSlider";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home"); // home, login, register

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleLogin = ({ email, password }) => {
    // TODO: call API, validate
    setUser({ name: email.split('@')[0] });
    setPage("home");
  };

  const handleRegister = ({ email, password, name }) => {
    // TODO: call API, validate
    setUser({ name });
    setPage("home");
  };

  return (
    <div className="App" style={{ fontFamily: 'Roboto, Arial, sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <Navbar user={user} onLoginClick={() => setPage("login")} cartCount={cart.length} />
      {page === "home" && (
        <>
          <Banner />
          <CategoryBar />
          <ProductSlider onAddToCart={handleAddToCart} />
        </>
      )}
      {page === "login" && <Login onLogin={handleLogin} onSwitchToRegister={() => setPage("register")} />}
      {page === "register" && <Register onRegister={handleRegister} onSwitchToLogin={() => setPage("login")} />}
      <Footer />
    </div>
  );
}

export default App;
