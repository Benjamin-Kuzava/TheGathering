Rails
  .application
  .routes
  .draw do
    post '/auth/login', to: 'authentication#login'
    get '/auth/verify', to: 'authentication#verify'
    resources :articles
    resources :categories, only: :index
    resources :users, only: :create
    put '/categories/:category_id/articles/:id',
        to: 'categories#add_category_to_article'
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  end
