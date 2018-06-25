class Api::AppsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: App.all
  end

  def update
    current_user.liked_apps << params[:id].to_i
    current_user.save
  end

  def show
    app = App.find(params[:id])
    render json: app
  end

  def my_apps
    render json: User.liked(current_user.liked_apps)
  end

end
