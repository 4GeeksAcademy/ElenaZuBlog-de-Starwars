import StarWarsApi from "../config"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			personDetail: [] 

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getCharacters:  async () => {
				try {
					const response = await fetch(StarWarsApi + "people/");
					const data = await response.json();
					setStore({characters: data.results});
		
				} catch (error) {
					console.error(error);
				}
			},

			getPlanets: async () => {
				try {

					const response = await fetch(StarWarsApi + "planets/");
					const data = await response.json();
					setStore({planets: data.results});

				} catch (error) {
					console.error(error);
				}
			},

			getVehicles: async () => {
				try {

					const response = await fetch(StarWarsApi + "planets/");
					const data = await response.json();
					setStore({vehicles: data.results});

				} catch (error) {
					console.error(error);
				}
			},

			getPersonById : async (id) => {
				try {

					const response = await fetch(StarWarsApi + "people/" +id);
					const data = await response.json();
					setStore({personDetail: data});
					
				} catch (error) {
					console.error(error);
				}
			},

		}
	};
};

export default getState;
