/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { normalizeName, styleColor } from "../utils/helpFunc";

const PokemonCard = ({ product }) => {
  const [pokomonTypes, setPokemonTypes] = useState([]);
  const [pokemonImage, setPokemonImage] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${product.url}`)
      .then((response) => {
        console.log(response.data);
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
        <Typography variant="h4" gutterBottom>
          {normalizeName(product.name)}
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {pokomonTypes.map((pok) => (
            <Box key={pok.slot} sx={styleColor(pok.type.name)}>
              <Typography variant="h5" gutterBottom>
                {pok.type.name}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
