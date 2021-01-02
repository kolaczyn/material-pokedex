import React from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  Container,
  Box,
  Typography,
  IconButton,
  Switch,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";

import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    // alignItems: "center",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginTop: 5,
    marginBottom: 5,
  },
  searchIcon: {
    alignSelf: "flex-end",
    margin: 5,
  },
  searchInput: {
    width: 333,
    margin: 5,
  },
  logo: {
    // flexGrow: 1,
  },
  toolBar: {
    justifyContent: "space-between",
  },
}));

const TheNavbar = ({ handleSearchChange }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h4" className={classes.logo}>
          Pokédex
        </Typography>
        <Box className={classes.searchContainer}>
          <SearchIcon className={classes.searchIcon} />
          <TextField
            label="Pokemon"
            variant="standard"
            className={classes.searchInput}
            onChange={handleSearchChange}
          />
        </Box>
        <div>
          <IconButton>
            <Brightness4Icon />
          </IconButton>
          <Switch />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TheNavbar;
