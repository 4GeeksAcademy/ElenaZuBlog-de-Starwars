import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
	

	const { store, actions } = useContext(Context);

	console.debug(store.favorites);

	const printFavoritesList = () => {
		return (
					store.favorites.map((value, index) => {

						return (
							<li key={index}><a className="dropdown-item" href="#">{value}</a><FontAwesomeIcon icon={faTrash} onClick={() => { actions.deleteFavorite(value) }}/></li>
						)
					})
		)
	}

	const printEmptyMessage = () => {
		return (
			<li>Empty</li>
		)
	}
	return (
		<nav className="navbar navbar-light bg-light mb-3 d-flex justify-content-between">
			<div className="ms-5" style={{ width: "55%" }}>
				<Link to="/">
					<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" style={{ width: "10%" }}></img>
				</Link>
			</div>
			<div className="me-5">
					<div className="btn-group">
						<button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Action
						</button>
						<ul className="dropdown-menu">
						{
							store.favorites ? (store.favorites.length === 0 ? printEmptyMessage() : printFavoritesList() ) : ""
						}
						</ul>
					</div>
			</div>




		</nav>
	);
};
