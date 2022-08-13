import PropTypes from 'prop-types';
import { FcPortraitMode } from 'react-icons/fc';
import { Portrait, Wrapper } from './ActorCard.styled';

export const ActorCard = ({ photo, name, character }) => {
  return (
    <>
      {photo ? (
        <>
          <img
            src={'https://image.tmdb.org/t/p/original' + photo}
            alt={name}
            loading="lazy"
          />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </>
      ) : (
        <>
          <Portrait>
            <FcPortraitMode size="100%" />
          </Portrait>
          <Wrapper>
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </Wrapper>
        </>
      )}
    </>
  );
};

ActorCard.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
