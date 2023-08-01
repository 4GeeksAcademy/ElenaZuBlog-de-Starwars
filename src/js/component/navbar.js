import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between">
			<div className="ms-5" style={{ width: "55%" }}>
				<Link to="/">
					<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" style={{ width: "10%" }}></img>
				</Link>
			</div>
			<div className="me-5">
				<Link to="/demo">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
				</Link>
			</div>




		</nav>
	);
};
