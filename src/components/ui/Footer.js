import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    position: "relative",
    zIndex: "1302",
    marginTop: "7rem",
    width: "100vw",
  },
  footerContainer: {
    minHeight: "3rem",
  },
  link: {
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: "700",
    color: "white",
    textDecoration: 0,
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer className={classes.footer}>
      <Grid
        direction={matches ? "column" : "row"}
        className={classes.footerContainer}
        container
        justify={matches ? "center" : "space-evenly"}
        alignItems="center"
      >
        <Grid component={Link} to="/" item className={classes.link}>
          Home
        </Grid>
        <Grid item className={classes.link}>
          Sell on EShop
        </Grid>
        <Grid item className={classes.link}>
          About Us
        </Grid>
        <Grid item className={classes.link}>
          Contact Us
        </Grid>
        <Grid item className={classes.link}>
          Privacy Notice
        </Grid>
        <Grid
          item
          className={classes.link}
          style={{ marginBottom: matches ? "1rem" : undefined }}
        >
          © 2007-2021 eshop.com
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
