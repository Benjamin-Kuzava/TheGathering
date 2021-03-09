import {
  Button,
  capitalize,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { getOneArticle } from "../../services/articles";
import { UserContext } from "../../utilities/UserContext";
import { formatDate } from "../../utilities/utilities";
import "./ArticleDetail.css";
import parse from "html-react-parser";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const useStyles = makeStyles(() => ({
  recommended: {
    height: "fit-content",
    marginTop: "2em",
  },
  divider: {
    marginBottom: "1em",
    backgroundColor: "black",
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

  const sameAuthorJSX = articles
    .filter((a) => a.user_id === article?.user_id && a.id !== article?.id)
    .map((article) => <ArticleCard key={article.id} article={article} />);

  const sameCategoryJSX = articles
    .filter(
      (a) =>
        a.categories[0].name === article?.categories[0].name &&
        a.id !== article?.id
    )
    .map((article) => <ArticleCard key={article.id} article={article} />);

  return (
    <Grid container spacing={4} justify="space-evenly">
      <Grid item xs={12}>
        <Banner article={article} />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="h3">{article?.title}</Typography>
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
            >
              Edit Content
            </Button>
          </Grid>
        ) : (
          ""
        )}
        <hr />
        {article?.content ? parse(article?.content) : ""}
      </Grid>
      <Grid
        item
        xs={2}
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
          className={classes.recommended}
        >
          <Typography variant="button">{`More Content from ${article?.user.first_name} ${article?.user.last_name}`}</Typography>
          <Divider className={classes.divider} />
          {sameAuthorJSX}
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="column"
          spacing={4}
          alignItems="center"
          component={Paper}
          className={classes.recommended}
        >
          <Typography variant="button">
            {article &&
              `More ${capitalize(article?.categories[0].name)} Content`}
          </Typography>
          <Divider className={classes.divider} />
          {sameCategoryJSX}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArticleDetail;
