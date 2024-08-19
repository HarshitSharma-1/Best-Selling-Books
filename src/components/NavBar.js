import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Booklist from "./Booklist";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import { Fragment } from "react";

const NavBar = () => {
  return (
    <CartProvider>
      <Router>
        <Fragment>
          <nav>
            <ul>
              <li>
                <Link to="/">Booklist</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </Fragment>

        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default NavBar;
