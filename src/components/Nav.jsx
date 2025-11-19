import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "./ContentContainer";
import logo2 from "../assets/logo2.png";
import "./Nav.css";

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <header>
      <nav className="navbar-banner" aria-label="Main navigation">
        <ContentContainer>
          <div className="navbar-content">
            <Link to="/" className="logo-link">
              <img
                src={logo2}
                alt="Little Lemon Logo"
                className="logo2"
              />
            </Link>
            {/* Hamburger button */}
            <button
              className="hamburger"
              onClick={toggleHamburger}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={hamburgerOpen ? faTimes : faBars} size="2x" />
            </button>
            {/* Nav links */}
            <ul className={hamburgerOpen ? "nav-links open" : "nav-links"}>
              <li><Link to="/" onClick={() => setHamburgerOpen(false)}>Home</Link></li>
              <li><HashLink to="/#about" onClick={() => setHamburgerOpen(false)}>About</HashLink></li>
              <li><HashLink to="/#highlights" onClick={() => setHamburgerOpen(false)}>Menu</HashLink></li>
              <li><Link to="/booking" onClick={() => setHamburgerOpen(false)}>Reservations</Link></li>
              <li><Link to="/order-online" onClick={() => setHamburgerOpen(false)}>Order Online</Link></li>
              <li><Link to="/login" onClick={() => setHamburgerOpen(false)}>Login</Link></li>
            </ul>
          </div>
        </ContentContainer>
      </nav>
    </header>
  );
}

export default Nav;
