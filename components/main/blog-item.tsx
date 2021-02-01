import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import utileStyles from "../../styles/utils.module.scss";
import Date from "../../components/date";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import type { BlogData } from "../../pages/type";
import type { Props } from "../../pages/type";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(0),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    media: {
      height: "150px",
      margin: "8px"
    },
    blogTitle: {
      wordBreak: "break-all",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      minHeight: "100px"
    },
    blogContent: {
      wordBreak: "break-all",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitLineClamp: 3,
      WebkitBoxOrient: "vertical",
    },
  })
);

export default function BlogItem({ blogData }) {
  const classes = useStyles();
  console.log(blogData.thumnail);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper className={classes.paper}>
      <Link href={`/posts/${blogData.id}`}>
        <a>
          <Card key={blogData.title}>
            <CardActionArea>
              {blogData.thumnail === undefined ? (
                <CardMedia
                  className={classes.media}
                  image="https://via.placeholder.com/150"
                />
              ) : (
                <CardMedia
                  className={classes.media}
                  image={blogData.thumnail}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h6" component="h3" className={classes.blogTitle}>
                  {blogData.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.blogContent}
                >
                  <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="flex justify-between">
              <Button size="small" color="primary">
                urlをコピー
              </Button>
              <div className={utileStyles.lightText}>
          <Date dateString={blogData.date} />
        </div>
            </CardActions>
          </Card>
          </a>
        </Link>
      </Paper>
    </Grid>
  );
}
