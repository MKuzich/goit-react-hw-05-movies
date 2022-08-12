import { MovieCard } from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import { Card, List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies &&
        movies.map(({ original_title, poster_path, id }) => {
          return (
            <Card key={id}>
              <MovieCard title={original_title} poster={poster_path} id={id} />
            </Card>
          );
        })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
