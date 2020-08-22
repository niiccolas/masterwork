import React from "react";

import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import "./Film.scss";

type FilmProps = {
  title?: string;
  img?: string;
  description?: string;
  release?: string;
};

const year = (date: string) => new Date(date).getFullYear();

const Film = ({ title, img, description, release }: FilmProps) => {
  if (!title || !img || !description) return null;
  return (
    <Grid item xs={12} sm={6} md={3} className="Film">
      <Card raised>
        <CardActionArea>
          <CardMedia
            image={img}
            title={title}
            style={{ height: 0, paddingTop: "100%" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              {title}
            </Typography>
            <Typography variant="subtitle1" align="left">
              {release && year(release)}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="left"
            >
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" style={{ color: "black" }}>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Film;
