import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { getProducts } from "../redux/actions";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  itemContainer: {
    margin: "1rem 0.3rem",
    maxWidth: "360px",
    height: "500px",
  },
  category: {
    ...theme.typography.body1,
    marginTop: "2rem",
  },
}));

function Products() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.allProducts[0]);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Grid
      container
      direction="row"
      className={classes.mainContainer}
      justify="center"
      spacing={2}
    >
      {state !== undefined ? (
        state.map((product) => (
          <Grid
            key={product.id}
            item
            md={6}
            lg={4}
            className={classes.itemContainer}
          >
            <Card raised>
              <CardActionArea
                style={{
                  height: "500px",
                }}
              >
                <CardMedia
                  image={product.image}
                  title="Click for more info"
                  style={{ height: "240px", margin: "10px" }}
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
