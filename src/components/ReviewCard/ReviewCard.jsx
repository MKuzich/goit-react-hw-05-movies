import PropTypes from 'prop-types';
import { Title, Text } from './ReviewCard.styled';

export const ReviewCard = ({ author, content }) => {
  return (
    <>
      <Title>{author}</Title>
      <Text>{content}</Text>
    </>
  );
};

ReviewCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
