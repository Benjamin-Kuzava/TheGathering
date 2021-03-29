import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utilities/utilities";
import "./ArticleCard";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    backgroundPositionY: "top",
  },
});

const ArticleCard = (props) => {
  const { root, media } = useStyles();

  return (
    <Card className={root} article={props.article} elevation={2}>
      <CardActionArea
        article={props.article}
        component={Link}
        to={`/articles/${props.article.id}`}
      >
        {props.article ? (
          <CardMedia
            className={media}
            image={props.article.img_url}
            title={`Image for: ${props.article.title}`}
          />
        ) : (
          <Skeleton
            variant="rect"
            animation="wave"
            width={"100%"}
            height={118}
          />
        )}
        <CardContent>
          {props.article ? (
            <Typography gutterBottom variant="h5" component="div">
              {props.article.title}
            </Typography>
          ) : (
            <>
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" width="80%" height={10} />
              <Skeleton animation="wave" width="80%" height={10} />
            </>
          )}
          <Typography variant="body2" color="textSecondary" component="div">
            {props.article.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.article.title && (
          <Grid container justify="space-between" alignItems="center">
            <Button
              size="small"
              color="primary"
              component={Link}
              to={`/articles/${props.article.id}`}
            >
              Read More
            </Button>
            <Typography variant="caption" component="div">
              {formatDate(props.article.created_at)}
            </Typography>
          </Grid>
        )}
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
