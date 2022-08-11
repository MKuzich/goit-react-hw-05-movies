import { MovieCard } from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ original_title, poster_path, id }) => {
          return (
            <li key={id}>
              <MovieCard title={original_title} poster={poster_path} id={id} />
            </li>
          );
        })}
    </ul>
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
