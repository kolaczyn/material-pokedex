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

export default function PokemonCard(props) {
  const history = useHistory()
  const { pokemon, idx} = props;
  const classes = useStyles();
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx}.png`;
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea onClick={() => history.push(`/${idx}`)}>
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
        </CardActionArea>
      </Card>
    </Grid>
  );
}
