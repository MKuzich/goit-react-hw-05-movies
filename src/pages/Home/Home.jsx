import { getPopularMovies } from '../../services/api';
import { useState, useEffect, createContext, useContext } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { Section, Title } from './Home.styled';

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
    <main>
      <Section>
        <Title>Trending today</Title>
        <HomeContext.Provider value={'movies/'}>
          <MoviesList movies={movies} />
        </HomeContext.Provider>
      </Section>
    </main>
  );
};

export default Home;
