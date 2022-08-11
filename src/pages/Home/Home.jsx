import { getPopularMovies } from '../../services/api';
import { useState, useEffect } from 'react';

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(
    () =>
      getPopularMovies()
        .then(r => setMovies(r))
        .catch(console.log)
        .finally(console.log(movies)),
    []
  );
  return (
    <section>
      <h1></h1>
      <ul>{movies.map(movie => console.log(movie))}</ul>
    </section>
  );
};

export default Home;
