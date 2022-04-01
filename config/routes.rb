Rails.application.routes.draw do
  root to: 'pages#home'
  get '/demo', to: "pages#demo", as: :demo
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
