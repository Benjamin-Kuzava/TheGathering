import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import "./ArticleCard";
import { Link } from "react-router-dom";

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
  // const { title, img_URL } = props;

  return (
    <Card className={root} article={props.article}>
      <CardActionArea article={props.article}>
        <CardMedia
          className={media}
          image={props.article.img_url}
          title="Contemplative Reptile"
          component={Link}
          to={`/articles/${props.article.id}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.article.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
