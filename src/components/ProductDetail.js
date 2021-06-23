import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import { LinearProgress } from "@material-ui/core";
import { fetchProduct, removeSelectedProduct } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.primary.main,
    lineHeight: 1,
    fontSize: "2rem",
  },
  chip: {
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: 700,
  },
  cart: {
    borderRadius: "50px",
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1rem",
    textTransform: "capitalize",
    color: "#fff",
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: "#fff",
    },
  },
  backButton: {
    borderRadius: "50px",
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1rem",
    textTransform: "none",
  },
}));

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id && id !== "") dispatch(fetchProduct(id));

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [id]);

  const classes = useStyles();

  const oneProduct = useSelector((state) => state.oneProduct);

  return (
    <>
      {oneProduct.length !== 0 ? (
        oneProduct.map((item) => (
          <Grid key={item.id} container direction="row" justify="center">
            <Grid
              container
              direction="row"
              justify="center"
              style={{ margin: "3rem" }}
            >
              <Grid item md={2}>
                <Button
                  component={Link}
                  to="/"
                  color="primary"
                  className={classes.backButton}
                >
                  Back To Products
                </Button>
              </Grid>
              <Grid item md>
                <img
                  style={{ height: "450px", width: "450px" }}
                  src={item.image}
                />
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                style={{ marginRight: "5rem" }}
              />
              <Grid item md>
                <Grid item container direction="column" spacing={2}>
                  <Grid item style={{ width: "500px" }}>
                    <Typography
                      className={classes.title}
                      variant="h1"
                      align="left"
                      paragraph
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {item.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      paragraph
                      style={{ fontSize: "2rem" }}
                    >
                      ${item.price}
                    </Typography>
                    <Chip
                      variant="outlined"
                      label={item.category}
                      color="primary"
                      className={classes.chip}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      disableRipple
                      className={classes.cart}
                      variant="contained"
                      color="secondary"
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))
      ) : (
        <Grid container direction="row" justify="center">
          <LinearProgress className={classes.root} color="secondary" />
        </Grid>
      )}
    </>
  );
}

export default ProductDetail;
