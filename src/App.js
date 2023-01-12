import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { useState } from "react";

import "./components/styles/Main.scss";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import Products from "./components/Pages/Products";
import IndividualProduct from "./components/Pages/IndividualProduct";
import Login from "./components/Login";
import Cart from "./components/Pages/Cart";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import CartProvider from "./components/context/CartProvider";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <div className="App">
      <CartProvider>
        <Router>
          <div className="navbar">
            <Navbar setToken={setToken} />
            {token ? <Products /> : <Login token={token} setToken={setToken} />}

            <NavLink className="navlink" to="/Products">
              Products
            </NavLink>
            <NavLink className="navlink" to="/Cart">
              Cart
            </NavLink>
            <NavLink className="navlink" to="/Contact">
              Contact
            </NavLink>
            <NavLink className="navlink" to="/About">
              About
            </NavLink>
          </div>

          <Switch>
            <Route path="/Products" component={Products} />
            <Route path="/Products/:id" component={IndividualProduct} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
          </Switch>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}
