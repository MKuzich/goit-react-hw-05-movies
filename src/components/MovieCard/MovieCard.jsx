import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieCard = ({ title, poster }) => {
  return (
    <Link>
      <img src={'https://image.tmdb.org/t/p/original/' + poster} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
