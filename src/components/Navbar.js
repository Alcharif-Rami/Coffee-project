import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innterWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
           SpecialtyCoffee <i className="fa-solid fa-mug-saucer" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/coffee"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Coffee
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/origins"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Origins
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/rating"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Rating
              </Link>
            </li>
          </ul>
          {/* {Button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
