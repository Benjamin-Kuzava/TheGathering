import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "../../components/Banner/Banner";
import { getOneArticle } from "../../services/articles";
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
        <hr />
      </Grid>
    </Grid>
  );
};

export default ArticleDetail;
