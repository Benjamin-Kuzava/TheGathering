import { Button, Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { getOneArticle } from "../../services/articles";
import { UserContext } from "../../utilities/UserContext";
import { formatDate } from "../../utilities/utilities";
import "./ArticleDetail.css";
import parse from "html-react-parser";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const ArticleDetail = (props) => {
  const [article, setArticle] = useState(null);
  const { currentUser } = useContext(UserContext);
  const { id } = useParams();
  const { articles } = props;

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getOneArticle(id);
      setArticle(article);
    };
    fetchArticle();
  }, [id, articles]);

  const recommended = articles
    .filter(
      (articleItem) =>
        articleItem.user_id === article?.user_id &&
        articleItem.id !== article?.id
    )
    .map((article) => <ArticleCard key={article.id} article={article} />);

  return (
    <Grid container spacing={4} justify="space-around">
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
        <div>{article?.content}</div>
      </Grid>
      <Grid
        item
        xs={2}
        container
        direction="column"
        spacing={4}
        alignItems="center"
        component={Paper}
      >
        {recommended}
      </Grid>
    </Grid>
  );
};

export default ArticleDetail;
