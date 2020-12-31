import { Typography, Link, CircularProgress, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { capitalize } from "./utils/capitalize";

export default function Pokemon(props) {
  const { history } = props;
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const { pokemonId } = props.match.params;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    setPokemon(response.data);
    console.log();
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;

    return (
      <>
        <Typography variant="h1">
          {`${id}. ${capitalize(name)}`}
          <img src={front_default} alt={name} />
        </Typography>
        <img src={fullImageUrl} alt={name} />
        <Typography>{"Species: "}</Typography>
        <Link href={species.url}>{species.name}</Link>

        <Typography>Height: {height}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography variant="h6">
          Types: {types.reduce((acc, type) => acc + " " + type.type.name, "")}
        </Typography>
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {pokemon === false && <Typography>Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
}
