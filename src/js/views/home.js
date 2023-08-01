import React, { useState, useEffect, useContext } from "react";


import "../../styles/home.css";

import { Context } from "../store/appContext";

import Card from "../component/Card";

import ElementDetail from "./PersonDetail";

export const Home = () => {

	const { store, actions } = useContext(Context);

	return (
		<>
			<h2 className="text-danger ms-3">Characters</h2>
			<div className="d-flex">
				{
					store.characters.map((character, index) => {
						return (
							<Card router={"/character/detail/" + character.uid} name={character.name} key={index} ></Card>
						)
					})
				}
			</div>

			<h2 className="text-danger ms-3">Planets</h2>
			<div className="d-flex">
				{
					store.planets.map((planets, index) => {
						return (
							<Card name={planets.name} key={index}></Card>
						)
					})
				}
			</div>

			<h2 className="text-danger ms-3">Vehicles</h2>
			<div className="d-flex">
				{
					store.vehicles.map((vehicles, index) => {
						return (
							<Card name={vehicles.name} key={index}></Card>
						)
					})
				}
			</div>

		</>

	)


};