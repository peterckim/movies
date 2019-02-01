class MoviesController < ApplicationController
    def index
        tmdb = TmdbService.new
        body = tmdb.movies["results"]
        
        body.each do |movie|
            Movie.find_or_create_by(:title => movie["title"], :poster_path => movie["poster_path"], :backdrop_path => movie["backdrop_path"], :overview => movie["overview"], :release_date => movie["release_date"], :vote_count => movie["vote_count"], :vote_average => movie["vote_average"])
        end

        render(
            status: 200,
            json: Movie.all
        )
    end
end
