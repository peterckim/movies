Rails.application.routes.draw do
  scope '/api' do
    get :movie, to: 'movies#index'
  end
end
