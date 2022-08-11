import { getPopularMovies } from '../../services/api';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getPopularMovies()
      .then(r => console.log(r))
      .catch(console.log)
      .finally(console.log(movies));
  }, []);
  return (
    <section>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </section>
  );
};

export default Home;
