import { useState, useEffect } from 'react';
import { getRequestedMovies } from 'services/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [request, setRequest] = useState(null);

  useEffect(() => {
    if (request) {
      return;
    }

    getRequestedMovies(request)
      .then(r => setMovies(r))
      .catch(console.log);
  }, [request, movies]);

  return (
    <main>
      <SearchBar onSubmit={setRequest} />
      <section>
        <h1>Movies for request {}</h1>
        <MoviesList movies={movies} />
      </section>
    </main>
  );
};

export default Movies;
