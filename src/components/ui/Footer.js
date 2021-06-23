import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    position: "relative",
    zIndex: "1302",
    marginTop: "6.1rem",
  },
  footerContainer: {
    height: "3rem",
  },
  link: {
    fontFamily: "Raleway",
    fontSize: "1rem",
    fontWeight: "700",
    color: "white",
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Grid
        className={classes.footerContainer}
        container
        justify="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Grid item className={classes.link}>
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
          © 2007-2021 eshop.com
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
