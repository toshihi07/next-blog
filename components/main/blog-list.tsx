import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import BlogItem from "./blog-item";

import type { BlogData } from "../../pages/type";
import type { Props } from "../../pages/type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
        },
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    media: {
      height: "200px",
    },
  })
);

export default function BlogList({ blogDatas }: Props): JSX.Element {
  const classes = useStyles();
  function FormRow() {
    return (
        <React.Fragment>
          {" "}
          {blogDatas.map((blogData: BlogData) => (
            <BlogItem blogData={blogData} />
          ))}
        </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
