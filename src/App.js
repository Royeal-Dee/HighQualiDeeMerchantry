import "./components/styles/App.css";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import Products from "./components/Products";
import Login from "./components/Login";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      <Navbar setToken={setToken} />
      {token ? <Products /> : <Login token={token} setToken={setToken} />}
      <Footer />
    </div>
  );
}
