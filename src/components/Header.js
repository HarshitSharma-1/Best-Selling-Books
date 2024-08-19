import { Fragment } from "react";
import "../styles/Header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1 className="heading">Amazon Best Selling</h1>
        <p>Our most popular product based on developer.</p>
        <NavBar />
      </header>
    </Fragment>
  );
};

export default Header;
