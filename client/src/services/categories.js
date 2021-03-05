import api from "./api-config";

export const getAllCategories = async () => {
  const resp = await api.get("/categories");
  return resp.data;
};

export const addCategoryToArticle = async (categoryId, articleId) => {
  const resp = await api.put(`/categories/${categoryId}/articles/${articleId}`);
  return resp.data;
};
