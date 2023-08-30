import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import Home from "../pages/Home";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<a href="/Home">SHIRTS</a>
				<a href="/#">POLOS</a>
				<a href="/#">SUITS</a>
				<a href="/#">PANTS</a>
                <a href="/#">SWEATERS</a>
				<a href="/#">JACKETS & COATS</a>
				<a href="/#">SHOES</a>
				<a href="/#">ACCESSORIES</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;