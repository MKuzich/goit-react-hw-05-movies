import { useState, useEffect } from 'react';
import { getRequestedMovies } from 'services/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchBar } from '../../components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [request, setRequest] = useState();

  useEffect(() => {
    if (!request) {
      return;
    }

    getRequestedMovies(request)
      .then(r => setMovies(r))
      .catch(console.log);
  }, [request]);

  return (
    <main>
      <SearchBar onSubmit={setRequest} />
      <section>
        {movies && (
          <>
            <h1>Movies for request {}</h1>
            <MoviesList movies={movies} />
          </>
        )}
      </section>
    </main>
  );
};

export default Movies;
