import {
  Typography,
  CircularProgress,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import { capitalize } from "../utils/capitalize";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },

  root: {
    minHeight: '100vh',
  },
}));

export default function Pokemon(props) {
  const { history } = props;
  const [pokemon, setPokemon] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    const fetchPokemon = async () => {
      const { pokemonId } = props.match.params;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      setPokemon(response.data);
    };
    fetchPokemon();
  }, [props.match.params]);

  const generatePokemonJSX = () => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    return (
      // <img src={front_default} alt={name} />
      <Grid container justify="center" alignItems="center" className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            component="img"
            alt={name}
            image={fullImageUrl}
            title={capitalize(name)}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {`${id}. ${capitalize(name)}`}
            </Typography>
            {/* <Typography>{"Species: "}</Typography>
            <Link href={species.url}>{species.name}</Link>

            <Typography>Height: {height}</Typography>
            <Typography>Weight: {weight}</Typography>
            <Typography variant="h6">
              Types:{" "}
              {types.reduce((acc, type) => acc + " " + type.type.name, "")}
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={() => history.push("/")}>
              Back to Pokedex
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX()}
      {pokemon === false && <Typography>Pokemon not found</Typography>}
    </>
  );
}
