import { useContext, useEffect, useState } from "react";
// import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import ArticleCreate from "../../screens/ArticleCreate/ArticleCreate";
import ArticleDetail from "../../screens/ArticleDetail/ArticleDetail";
import ArticleEdit from "../../screens/ArticleEdit/ArticleEdit";
import Articles from "../../screens/Articles/Articles";
import {
  destroyArticle,
  getAllArticles,
  postArticle,
  putArticle,
} from "../../services/articles";
import { getAllCategories } from "../../services/categories";
import { UserContext } from "../../utilities/UserContext";
import "./MainContainer.css";

const MainContainer = () => {
  const { currentUser } = useContext(UserContext);
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
  };

  const handleUpdate = async (id, formData) => {
    const updatedArticle = await putArticle(id, formData);
    setArticles((prevState) =>
      prevState.map((article) => {
        return article.id === Number(id) ? updatedArticle : article;
      })
    );
    history.push("/articles");
  };

  return (
    <Switch>
      {!currentUser && <Redirect to="/" />}
      <Route path="/articles/new">
        <ArticleCreate handleCreate={handleCreate} />
      </Route>
      <Route path="/articles/:id/edit">
        <ArticleEdit articles={articles} handleUpdate={handleUpdate} />
      </Route>
      <Route path="/articles/:id">
        <ArticleDetail categories={categories} />
      </Route>
      <Route path="/articles">
        <Articles
          articles={articles}
          currentUser={currentUser}
          handleDelete={handleDelete}
        />
      </Route>
    </Switch>
  );
};

export default MainContainer;
