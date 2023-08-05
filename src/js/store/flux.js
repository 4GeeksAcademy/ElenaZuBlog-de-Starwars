import StarWarsApi from "../config"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			personDetail: [],
			favorites: [] 

		},
		actions: {

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

			addFavoriteItem : (name) =>{

				let favorites = getStore().favorites;
				let isTheElementIncluded = false;
				let updatedFavoriteList = [...favorites];;
				for (const element of favorites){
					if(name==element){
						isTheElementIncluded = true;
						break;
					}
				};
				if(!isTheElementIncluded){
					updatedFavoriteList.push(name);
				}

				setStore({favorites: updatedFavoriteList});
			},

			deleteFavorite : (valueToRemove) => {
				console.log("Trying to remove:", valueToRemove);
				console.log("Current favorites:", getStore.favorites);
		
				let updatedFavoriteList = getStore().favorites.filter((value) => value !== valueToRemove);
		
				setStore({favorites: updatedFavoriteList});
		
			}

		}
	};
};

export default getState;
