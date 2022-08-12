import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHome } from 'pages/Home/Home';
import { CardLink, Title } from './MovieCard.styled';

export const MovieCard = ({ title, poster, id }) => {
  const location = useLocation();
  const forHome = useHome();
  return (
    <CardLink to={`${forHome ? forHome : ''}${id}`} state={{ from: location }}>
      <img
        src={'https://image.tmdb.org/t/p/original/' + poster}
        alt={title}
        loading="lazy"
      />
      <Title>{title}</Title>
    </CardLink>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
