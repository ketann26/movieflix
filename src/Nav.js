import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import "./Nav.css";

const Nav = () => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
		});
		return () => {
			window.removeEventListener("scroll", null);
		};
	}, []);

	return (
		<div className={`nav ${show && "nav-bg"}`}>
			<img src={logo} alt="Logo" className="nav-logo" height="50px" />

			<img
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
				alt=""
				className="nav-avatar"
				height="50px"
			/>
		</div>
	);
};

export default Nav;
