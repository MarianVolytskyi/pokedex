import { createSlice } from "@reduxjs/toolkit";

export const selectedPokemonSlice = createSlice({
  name: "selectedPokemon",
  initialState: {
    selected: null,
    pokemonInfo: {},
  },
  reducers: {
    setSelectedPokemon: (state, action) => {
      state.selected = action.payload;
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

export const { setSelectedPokemon, setPokemonInfo } = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
