import { useState, useEffect } from 'react';
import { getRequestedMovies } from 'services/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Section, Title, AccentRequest } from './Movies.styled';

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
      <Section>
        <SearchBar onSubmit={setRequest} />
        {request && (
          <Title>
            Movies for request <AccentRequest>{request}</AccentRequest>
          </Title>
        )}
        {request && <MoviesList movies={movies} />}
      </Section>
    </main>
  );
};

export default Movies;
