import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

function ProductDetail() {
  return (
    <Grid container direction="row" justify="center" style={{ margin: "3rem" }}>
      <Grid item lg={2}>
        <Button variant="outlined" color="primary">
          BACK TO PRODUCTS
        </Button>
      </Grid>
      <Grid item lg>
        <img
          style={{ height: "500px", width: "500px" }}
          src="https://images.unsplash.com/reserve/4bZZKXHQTseRktZuFYsi_OnTheDock.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
        />
      </Grid>
      <Grid item lg>
        <Grid item container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h2" align="left" paragraph>
              Title
            </Typography>
            <Typography variant="body1" paragraph>
              Description
            </Typography>
            <Typography variant="body2" paragraph>
              Price
            </Typography>
            <Chip label="CATEGORY" color="primary" />
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ProductDetail;
