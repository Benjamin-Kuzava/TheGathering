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
    <div>
      <Banner article={article} />
      <h1>detail</h1>
    </div>
  );
};

export default ArticleDetail;
