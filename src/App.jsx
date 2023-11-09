import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { getAllPokemon } from "./api/api";
import PokemonCard from "./components/Card";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    getAllPokemon(amount).then((response) => {
      setPokemons(response.data.results);
    });

    console.log(pokemons);

    return () => {};
  }, [amount]);

  const handleIncrease = () => {
    setAmount((cur) => cur + 1);
  };

  return (
    <>
    
      <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        POKEDEX
      </Typography>
      
        <Grid container spacing={2} justifyContent="center">
          {pokemons.map((pokemon) => (
            <Grid item xs={12} sm={4} key={pokemon.name}>
              <PokemonCard product={pokemon} />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          onClick={handleIncrease}
          size="large"
          style={{
            margin: "10px",
          }}
        >
          Load more
        </Button>
      </Container>
    </>
  );
};

export default App;
