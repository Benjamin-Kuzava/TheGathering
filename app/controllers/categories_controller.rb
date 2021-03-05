class CategoriesController < ApplicationController
  #GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  #POST custom method for association
  def add_category_to_article
    @article = Article.find(params[:id])
    @category = Category.find(params[:category_id])

    @article.categories << @category
  end
end
