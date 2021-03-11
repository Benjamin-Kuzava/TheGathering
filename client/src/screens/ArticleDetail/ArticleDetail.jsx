import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import parse from "html-react-parser";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Banner from "../../components/Banner/Banner";
import { getOneArticle } from "../../services/articles";
import { UserContext } from "../../utilities/UserContext";
import { formatDate } from "../../utilities/utilities";
import "./ArticleDetail.css";

const useStyles = makeStyles((theme) => ({
  recommended: {
    height: "fit-content",
    marginTop: "2em",
  },
  divider: {
    marginBottom: "1em",
    backgroundColor: "black",
  },
  button: {
    margin: "2em 0",
  },
  container: {
    marginBottom: "3rem",
  },
}));

const ArticleDetail = (props) => {
  const [article, setArticle] = useState(null);
  const { currentUser } = useContext(UserContext);
  const { id } = useParams();
  const { articles } = props;
  const classes = useStyles();

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getOneArticle(id);
      setArticle(article);
    };
    fetchArticle();
  }, [id, articles]);

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const sameAuthorJSX = articles
    .filter((a) => a.user_id === article?.user_id && a.id !== article?.id)
    .map((article) => (
      <Grid item key={article.id}>
        <ArticleCard article={article} />
      </Grid>
    ));

  return (
    <Grid
      container
      spacing={4}
      justify="space-evenly"
      className={classes.container}
    >
      <Grid item xs={12}>
        <Banner article={article} />
      </Grid>
      <Grid item md={6} xs={11}>
        <Typography
          variant={isSmallScreen ? "h5" : "h3"}
          className={classes.title}
        >
          {article?.title}
        </Typography>
        <Typography variant="subtitle1">{`${article?.user.first_name} ${
          article?.user.last_name
        } · ${formatDate(article?.created_at)}`}</Typography>
        {currentUser?.id === article?.user_id ? (
          <Grid container justify="space-between">
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={`/articles/${article?.id}/edit`}
              className={classes.button}
            >
              Edit Content
            </Button>
          </Grid>
        ) : (
          ""
        )}
        <hr />
        <div className="article-content">
          {article?.content ? parse(article?.content) : ""}
        </div>
      </Grid>
      <Grid
        item
        xs={10}
        md={5}
        lg={3}
        container
        direction="column"
        spacing={4}
        alignItems="center"
        className={classes.recommended}
      >
        <Grid
          item
          xs={12}
          container
          direction="column"
          spacing={4}
          alignItems="center"
          component={Paper}
          elevation={3}
          className={classes.recommended}
        >
          <Typography variant="button">{`More Content from ${article?.user.first_name} ${article?.user.last_name}`}</Typography>
          <Divider className={classes.divider} />
          {sameAuthorJSX}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArticleDetail;
