class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.integer :vote_count
      t.integer :vote_average
      t.string :title
      t.string :poster_path
      t.string :backdrop_path
      t.string :overview
      t.string :release_date
      t.timestamps
    end
  end
end
