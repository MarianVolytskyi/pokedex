import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const getPockemonDetails = (pockemonId) => api.get(`/${pockemonId}`);
export const getAllPokemon = (amount) => api.get(`/?limit=${12*amount}`);

