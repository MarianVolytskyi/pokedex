/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import axios from "axios";

import Stack from "@mui/material/Stack";

import { useEffect, useState } from "react";

const PokemonCard = ({ product }) => {
  const [pokomonTypes, setPokemonTypes] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);

  console.log(pokomonTypes);
  useEffect(() => {
    axios
      .get(`${product.url}`)
      .then((response) => {
        setPokemonTypes(response.data.types);
        setPokemonImage(response.data.sprites.other.dream_world.front_default);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally();
  }, []);

  return (
    <Card sx={{ maxWidth: 260 }}>
      <CardMedia
        component="img"
        image={pokemonImage}
        title={product.name}
        style={{
          height: 260,
          width: 260,
          objectFit: "contain",
        }}
      />
      <CardContent>
        <h2>{product.name}</h2>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {pokomonTypes.map((pok) => (
            <div key={pok.slot}>{pok.type.name}</div>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
