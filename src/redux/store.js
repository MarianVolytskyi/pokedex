import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonReducer";
import selectedPokemonSlice from "./selectedPokemonSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    selectedPokemon: selectedPokemonSlice,
  },
});

export default store;
