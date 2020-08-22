import React, { Fragment } from "react";
import { Grid, Typography, Box, Container } from "@material-ui/core";

import Film from "../Film/Film";
import mockDb from "../../mocks/db";

import "./Catalogue.scss";

const Catalogue = () => {
  const { data } = mockDb;
  return (
    <Fragment>
      <Container>
        <Box pb="1rem">
          <Typography variant="h5" align="left">
            Catalogue
          </Typography>
        </Box>
        <Grid container spacing={3} direction="row">
          {data.map(({ _id, ...rest }) => (
            <Film key={_id} {...rest} />
          ))}
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Catalogue;
