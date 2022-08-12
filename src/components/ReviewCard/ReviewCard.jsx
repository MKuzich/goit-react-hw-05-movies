import PropTypes from 'prop-types';

export const ReviewCard = ({ author, content }) => {
  return (
    <>
      <h3>{author}</h3>
      <p>{content}</p>
    </>
  );
};

ReviewCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
