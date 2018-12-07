class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
    else
      render json: @user.errors.full_messages, status: 418
    end
  end

  def destroy
    if current_user
      logout!
      render json: {}
    else
      render json: ['You were not signed in']
    end
  end
end