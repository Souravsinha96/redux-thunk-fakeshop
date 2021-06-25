import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import Chip from "@material-ui/core/Chip";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  mainContainer: {
    maxWidth: "1600px",
    margin: "0 auto",
  },
  itemContainer: {
    margin: "1rem 0.5rem",
    width: "360px",
    maxWidth: "360px",
    height: "500px",
    textDecoration: 0,
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "450px",
      marginTop: "1rem",
    },
  },
  category: {
    fontSize: "1rem",
    textTransform: "uppercase",
    fontWeight: 500,
    marginTop: "2rem",
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
  },
}));

function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allProducts[0]);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Grid
      container
      direction="row"
      className={classes.mainContainer}
      justify="center"
    >
      {state !== undefined ? (
        state.map((product) => (
          <Grid
            component={Link}
            to={`/products/${product.id}`}
            key={product.id}
            item
            lg={4}
            className={classes.itemContainer}
          >
            <Card raised>
              <CardActionArea
                style={{
                  height: matches ? "450px" : "500px",
                }}
              >
                <CardMedia
                  image={product.image}
                  title="Click for more info"
                  style={{
                    height: matches ? "180px" : "240px",
                    margin: "10px",
                  }}
                />
                <Divider variant="middle" />
                <CardContent>
                  <Typography variant="h2" align="left" paragraph>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    ${product.price}
                  </Typography>
                  <Tooltip disableFocusListener title="Category" arrow>
                    <Chip
                      avatar={<Avatar>C</Avatar>}
                      label={product.category}
                      color="primary"
                      className={classes.category}
                    />
                  </Tooltip>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      ) : (
        <LinearProgress className={classes.root} color="secondary" />
      )}
    </Grid>
  );
}

export default Products;
