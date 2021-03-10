import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import ArticleCreate from "../../screens/ArticleCreate/ArticleCreate";
import ArticleDetail from "../../screens/ArticleDetail/ArticleDetail";
import ArticleEdit from "../../screens/ArticleEdit/ArticleEdit";
import Articles from "../../screens/Articles/Articles";
import Home from "../../screens/Home/Home";
import {
  destroyArticle,
  getAllArticles,
  postArticle,
  putArticle,
} from "../../services/articles";
import { getAllCategories } from "../../services/categories";
import "./MainContainer.css";

const MainContainer = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCatories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getAllArticles();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      setCatories(categories);
    };
    fetchCategories();
  }, []);

  const handleCreate = async (formData) => {
    const newArticle = await postArticle(formData);
    setArticles((prevState) => [...prevState, newArticle]);
    history.push("/articles");
  };

  const handleDelete = async (id) => {
    await destroyArticle(id);
    setArticles((prevState) =>
      prevState.filter((article) => article.id !== id)
    );
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

  return (
    <Switch>
      <Route path="/articles/new">
        <ArticleCreate
          handleCreate={handleCreate}
          articles={articles}
          setArticles={setArticles}
          setCatories={setCatories}
        />
      </Route>
      <Route path="/articles/:id/edit">
        <ArticleEdit
          articles={articles}
          handleUpdate={handleUpdate}
          setArticles={setArticles}
          setCatories={setCatories}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/articles/:id">
        <ArticleDetail
          articles={articles}
          categories={categories}
          handleDelete={handleDelete}
        />
      </Route>
      <Route path="/">
        <Home articles={articles} categories={categories} />
      </Route>
    </Switch>
  );
};

export default MainContainer;
