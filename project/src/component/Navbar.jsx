import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Button } from "@chakra-ui/react";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h1>UNI_CLO</h1>
			<nav ref={navRef}>
			<Button>SHIRTS</Button>
            <Button>POLOS</Button>
            <Button>SUITS</Button>
            <Button>PANTS</Button>
            <Button>SWEATERS</Button>
            <Button>JACKETS&COATS</Button>
            <Button>ACCESSORIES</Button>
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