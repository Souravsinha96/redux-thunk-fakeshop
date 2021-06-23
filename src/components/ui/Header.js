import React, { useState } from "react";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core/useMediaQuery";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2rem",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    position: "relative",
    left: "70rem",
  },
  category: {
    color: "white",
  },
}));

function Header() {
  const classes = useStyles();
  const [Category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h1">EShop </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Category
            </InputLabel>
            <Select
              displayEmpty
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={Category}
              onChange={handleChange}
              className={classes.category}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Women's Clothing</MenuItem>
              <MenuItem value={20}>Electronics</MenuItem>
              <MenuItem value={30}>Men's Clothing</MenuItem>
              <MenuItem value={40}>Jewelery</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
