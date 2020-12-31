import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";
import axios from "axios";
import React, { useState, useEffect } from "react";

import { capitalize } from "./utils/capitalize";

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  searchContainer: {
    display: "flex",
    // alignItems: "center",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 5,
    marginBottom: 5,
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  searchInput: {
    width: 200,
    margin: 5,
  },
}));

const Pokedex = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [pokemonData, setData] = useState(null);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    // console.log('tig', filter)
    setFilter(e.target.value);
  };

  const getPokemonCard = (pokemon, idx) => {
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`;
    return (
      <Grid item xs={4} key={idx}>
        <Card onClick={() => history.push(`/${idx}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          ></CardMedia>
          <CardContent>
            <Typography className={classes.cardContent}>{`${idx}. ${capitalize(
              pokemon.name
            )}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  const fetchPokemon = async () => {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=152");
    const pokemon = data.data.results;
    setData(pokemon);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              label="Pokemon"
              variant="standard"
              className={classes.searchInput}
              onChange={handleSearchChange}
              // value={filter}
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {pokemonData.map(
            (pokemon, idx) =>
              pokemon.name.includes(filter) && getPokemonCard(pokemon, idx + 1)
          )}
          {/* {pokemonData.filter(pokemon => pokemon.name.includes(filter)).map((pokemon,idx) => getPokemonCard(pokemon, idx + 1))} */}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
