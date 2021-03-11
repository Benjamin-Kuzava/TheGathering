import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ArticleCreate from "../../screens/ArticleCreate/ArticleCreate";
import ArticleDetail from "../../screens/ArticleDetail/ArticleDetail";
import ArticleEdit from "../../screens/ArticleEdit/ArticleEdit";
import Home from "../../screens/Home/Home";
import {
  destroyArticle,
  getAllArticles,
  postArticle,
  putArticle,
} from "../../services/articles";
import {
  addCategoryToArticle,
  getAllCategories,
} from "../../services/categories";
import "./MainContainer.css";

const MainContainer = (props) => {
  const [articles, setArticles] = useState([]);
  const [categories, setCatories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getAllArticles();
      setArticles(articles);
    };
    fetchArticles();
  }, [props.toggleFetch]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      setCatories(categories);
    };
    fetchCategories();
  }, []);

  const handleCreate = async (formData, categoryId) => {
    const newArticle = await postArticle(formData);
    setArticles((prevState) => [...prevState, newArticle]);
    handleCategoryAdd(categoryId, newArticle.id);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await destroyArticle(id);
    setArticles((prevState) =>
      prevState.filter((article) => article.id !== id)
    );
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };

  const handleUpdate = async (id, formData) => {
    const updatedArticle = await putArticle(id, formData);
    setArticles((prevState) =>
      prevState.map((article) => {
        return article.id === Number(id) ? updatedArticle : article;
      })
    );
    history.push(`/articles/${id}`);
  };

  const handleCategoryAdd = async (categoryId, articleId) => {
    const updatedArticle = await addCategoryToArticle(categoryId, articleId);
    setArticles((prevState) =>
      prevState.map((article) => {
        return article.articleId === Number(articleId)
          ? updatedArticle
          : article;
      })
    );
    props.setToggleFetch((prev) => !prev);
    history.push(`/articles/${articleId}`);
  };

  return (
    <Switch>
      <Route exact path="/articles/new">
        <ArticleCreate
          handleCreate={handleCreate}
          articles={articles}
          setArticles={setArticles}
          categories={categories}
          handleCategoryAdd={handleCategoryAdd}
        />
      </Route>
      <Route exact path="/articles/:id/edit">
        <ArticleEdit
          articles={articles}
          handleUpdate={handleUpdate}
          setArticles={setArticles}
          categories={categories}
          handleDelete={handleDelete}
          handleCategoryAdd={handleCategoryAdd}
        />
      </Route>
      <Route exact path="/articles/:id">
        <ArticleDetail articles={articles} categories={categories} />
      </Route>
      <Route exact path="/">
        <Home articles={articles} categories={categories} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
