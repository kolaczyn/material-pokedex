import React from "react";
import { AppBar, Toolbar, TextField, Container, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, fade } from "@material-ui/core/styles";

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
    marginBottom: 5,
  },
  searchInput: {
    width: 200,
    margin: 5,
  },
}));

const TheNavbar = ({ handleSearchChange }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              label="Pokemon"
              variant="standard"
              className={classes.searchInput}
              onChange={handleSearchChange}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TheNavbar;
