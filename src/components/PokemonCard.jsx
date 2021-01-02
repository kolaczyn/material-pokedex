import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { capitalize } from "../utils/capitalize";

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

export default function PokemonCard({pokemon}) {
  const classes = useStyles();
  const history = useHistory()
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.idx}.png`;
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea onClick={() => history.push(`/${pokemon.idx}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={sprite}
            style={{ width: "130px", height: "130px" }}
          ></CardMedia>
          <CardContent>
            <Typography className={classes.cardContent}>{`${pokemon.idx}. ${capitalize(
              pokemon.name
            )}`}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
