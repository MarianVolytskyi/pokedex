import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    selectedPokemon: null,
    types: {},
    images: {},
    pokemons: [],
    amount: 1,
    pokemonInfo: {},
  },
  reducers: {
    setTypes: (state, action) => {
      state.types[action.payload.name] = action.payload.types;
    },
    setImages: (state, action) => {
      state.images[action.payload.name] = action.payload.image;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setPokemonInfo: (state, action) => {
      const { name, abilities, stats, weight, moves } = action.payload;
      state.pokemonInfo[name] = {
        abilities,
        stats,
        weight,
        moves,
      };
    },
  },
});

export const {
  setPokemonData,
  setSelectedPokemon,
  setPokemons,
  setAmount,
  setTypes,
  setImages,
  setPokemonInfo,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
