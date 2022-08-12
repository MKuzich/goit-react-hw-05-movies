import { getPopularMovies } from '../../services/api';
import { useState, useEffect, createContext, useContext } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';

const HomeContext = createContext();
export const useHome = () => useContext(HomeContext);

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getPopularMovies()
      .then(r => {
        setMovies(r);
      })
      .catch(console.log);
  }, []);
  return (
    <section>
      <h1>Trending today</h1>
      <HomeContext.Provider value={'movies/'}>
        <MoviesList movies={movies} />
      </HomeContext.Provider>
    </section>
  );
};

export default Home;
