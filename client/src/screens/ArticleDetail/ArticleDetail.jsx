import { Button, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { getOneArticle } from "../../services/articles";
import { UserContext } from "../../utilities/UserContext";
import { formatDate } from "../../utilities/utilities";
import "./ArticleDetail.css";
import parse from "html-react-parser";

const ArticleDetail = (props) => {
  const [article, setArticle] = useState(null);
  const { currentUser } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const article = await getOneArticle(id);
      setArticle(article);
    };
    fetchArticle();
  }, [id]);

  const { handleDelete } = props;

  return (
    <Grid container spacing={4} justify="center">
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
            <Button variant="outlined" color="secondary" onClick={handleDelete}>
              Delete Article
            </Button>
          </Grid>
        ) : (
          ""
        )}
        <hr />
        {article?.content ? parse(article?.content) : ""}
      </Grid>
    </Grid>
  );
};

export default ArticleDetail;
