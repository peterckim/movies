class TmdbService
    def movies
        resp = Faraday.get 'http://api.themoviedb.org/3/movie/now_playing?api_key=c9e315c4b389bc4340657616b8ebb88d'

        JSON.parse(resp.body)
    end
end
