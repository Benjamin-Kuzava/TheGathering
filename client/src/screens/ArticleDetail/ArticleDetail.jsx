import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import { getOneArticle } from "../../services/articles";
import { formatDate } from "../../utilities/utilities";
import "./ArticleDetail.css";

const ArticleDetail = () => {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getOneArticle(id);
      setArticle(article);
    };
    fetchArticle();
  }, [id]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Banner article={article} />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h3">{article?.title}</Typography>
        <Typography variant="subtitle1">{`${article?.user.first_name} ${article?.user.last_name}`}</Typography>
        <Typography variant="subtitle1">
          {formatDate(article?.created_at)}
        </Typography>
        <hr />
      </Grid>
    </Grid>
  );
};

export default ArticleDetail;
