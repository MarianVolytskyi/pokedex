import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { getAllPokemon } from "./api/api";
import PokemonCard from "./components/Card";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { setAmount, setPokemons } from "./redux/pokemonReducer"; 

const App = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemon.pokemons);
  const amount = useSelector((state) => state.pokemon.amount);

  useEffect(() => {
    getAllPokemon(amount).then((response) => {
      dispatch(setPokemons(response.data.results)); 
    });
  }, [amount, dispatch]);

  const handleIncrease = () => {

    dispatch(setAmount(amount + 1));
  };

  console.log(pokemons)
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          POKEDEX
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {pokemons.map((pokemon) => (
            <Grid item xs={12} sm={4} key={pokemon.name}>
              <PokemonCard pokemon={pokemon} />
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

