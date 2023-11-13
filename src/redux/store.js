import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonReducer";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export default store;
