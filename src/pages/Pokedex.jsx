import {
  CircularProgress,
  Container,
  Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import TheNavbar from "../components/TheNavbar";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
}));

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setData] = useState(null);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=152"
      );
      const pokemon = data.data.results;
      setData(pokemon);
    };
    fetchPokemon();
  }, []);

  return (
    <>
      <TheNavbar handleSearchChange={handleSearchChange} />
      <Container>
        {pokemonData ? (
          <Grid container spacing={2} className={classes.pokedexContainer}>
            {pokemonData.map(
              (pokemon, idx) =>
                pokemon.name.includes(filter) && (
                  <PokemonCard key={idx} pokemon={pokemon} idx={idx + 1} />
                )
            )}
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </Container>
    </>
  );
};

export default Pokedex;
