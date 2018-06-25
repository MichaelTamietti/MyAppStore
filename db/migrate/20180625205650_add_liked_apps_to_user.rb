class AddLikedAppsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_apps, :text
  end
end
