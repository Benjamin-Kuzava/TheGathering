import api from "./apiConfig";

export const getAllArticles = async () => {
  const resp = await api.get("/articles");
  return resp.data;
};

export const getOneArticle = async (id) => {
  const resp = await api.get(`/articles/${id}`);
  return resp.data;
};

export const postArticle = async (foodData) => {
  const resp = await api.post("/articles", { food: foodData });
  return resp.data;
};

export const putArticle = async (id, foodData) => {
  const resp = await api.put(`/articles/${id}`, { food: foodData });
  return resp.data;
};

export const destroyArticle = async (id) => {
  const resp = await api.delete(`/articles/${id}`);
  return resp;
};
