import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemonData = createAsyncThunk(
  "pokemon/fetchPokemonData",
  async (url, { dispatch }) => {
    try {
      const response = await axios.get(url);
      const pokemonTypes = response.data.types;
      const pokemonImage =
        response.data.sprites.other.dream_world.front_default;

      dispatch(
        setPokemonTypes({ name: response.data.name, types: pokemonTypes })
      );
      dispatch(
        setPokemonImage({ name: response.data.name, image: pokemonImage })
      );
    } catch (error) {
      console.error(error);
    }
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    types: {},
    images: {},
    pokemons: [],
    amount: 1,
  },
  reducers: {
    setPokemonTypes: (state, action) => {
      const { name, types } = action.payload;
      state.types[name] = types;
    },
    setPokemonImage: (state, action) => {
      const { name, image } = action.payload;
      state.images[name] = image;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
  },
});

// export const selectPokemonData = (state) => state.pokemon;

export const {
  setPokemonData,
  setPokemons,
  setAmount,
  setPokemonTypes,
  setPokemonImage,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
