import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHome } from 'pages/Home/Home';

export const MovieCard = ({ title, poster, id }) => {
  const location = useLocation();
  const forHome = useHome();
  return (
    <Link to={`${forHome ? forHome : ''}${id}`} state={{ from: location }}>
      <img src={'https://image.tmdb.org/t/p/original/' + poster} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
