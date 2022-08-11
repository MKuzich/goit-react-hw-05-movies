import { useState, useEffect } from 'react';
import { getRequestedMovies } from 'services/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [request, setRequest] = useState(null);
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    if (isFirstMount) {
      setIsFirstMount(false);
      return;
    }

    getRequestedMovies(request)
      .then(r => setMovies(r))
      .catch(console.log);
  }, [request, isFirstMount]);

  return (
    <main>
      <form>
        <input name="query" type="text" />
        <button type="submit"></button>
      </form>
      <section>
        <h1>Movies for request {}</h1>
        <MoviesList movies={movies} />
      </section>
    </main>
  );
};

export default Movies;
