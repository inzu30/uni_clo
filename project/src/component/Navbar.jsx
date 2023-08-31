import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1>UNI_CLO</h1>
      <nav ref={navRef}>
        <Link to="/products/SHIRTS">
          <Button>SHIRTS</Button>
        </Link>
        <Link to="/products/POLOS">
          <Button>POLOS</Button>
        </Link>
        <Link to="/products/SUITS">
          <Button>SUITS</Button>
        </Link>
        <Link to="/products/PANTS">
          <Button>PANTS</Button>
        </Link>
        <Link to="/products/SWEATERS">
          <Button>SWEATERS</Button>
        </Link>
        <Link to="/products/JACKETS&COATS">
          <Button>JACKETS & COATS</Button>
        </Link>
        <Link to="/products/SHOES">
          <Button>SHOES</Button>
        </Link>
        <Link to="/products/accessories">
          <Button>ACCESSORIES</Button>
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
