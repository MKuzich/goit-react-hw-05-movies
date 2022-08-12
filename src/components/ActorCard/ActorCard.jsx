import PropTypes from 'prop-types';

export const ActorCard = ({ photo, name, character }) => {
  return (
    <>
      <img src={'https://image.tmdb.org/t/p/original/' + photo} alt={name} />
      <h3>{name}</h3>
      <p>Character: {character}</p>
    </>
  );
};

ActorCard.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
