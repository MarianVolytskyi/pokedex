/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import {
  setImages,
  setSelectedPokemon,
  setTypes,
} from "../redux/pokemonReducer";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { normalizeName, styleColor } from "../utils/helpFunc";
import { CardDetails } from "./CardDetails";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemon.types[pokemon.name]);
  const image = useSelector((state) => state.pokemon.images[pokemon.name]);
  const selectedProduct = useSelector((state) => state.pokemon.selectedPokemon);

  useEffect(() => {
    axios
      .get(`${pokemon.url}`)
      .then((response) => {
        const pokemonTypes = response.data.types;
        const pokemonImage =
          response.data.sprites.other.dream_world.front_default;

        dispatch(setTypes({ name: pokemon.name, types: pokemonTypes }));
        dispatch(setImages({ name: pokemon.name, image: pokemonImage }));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch, pokemon.name, pokemon.url]);

  const handleClick = () => {
    dispatch(setSelectedPokemon(pokemon));
  };
  return (
    <>
      <Card
        sx={{
          maxWidth: 260,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            transform: "scale(1.05)",
          },
        }}
        onClick={handleClick}
      >
        <CardMedia
          component="img"
          image={image}
          title={pokemon.name}
          style={{
            height: 260,
            width: 260,
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom textAlign="center">
            {normalizeName(pokemon.name)}
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {types &&
              types.map((pok) => (
                <Box key={pok.slot} sx={styleColor(pok.type.name)}>
                  <Typography variant="h5" gutterBottom>
                    {pok.type.name}
                  </Typography>
                </Box>
              ))}
          </Stack>
        </CardContent>
      </Card>
      {selectedProduct && <CardDetails pokemon={selectedProduct} />}
    </>
  );
};

export default PokemonCard;
