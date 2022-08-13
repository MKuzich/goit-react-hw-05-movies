import { getMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { Card, Title } from './Reviews.styled';

const Status = {
  idle: 'IDLE',
  pending: 'PENDING',
  resolved: 'RESOLVED',
  rejected: 'REJECTED',
};
const { idle, pending, resolved, rejected } = Status;

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [status, setStatus] = useState(idle);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(pending);
    getMovieReviews(movieId)
      .then(r => {
        setReviews(r);
        setStatus(resolved);
      })
      .catch(error => {
        console.log(error);
        setStatus(rejected);
      });
  }, [movieId]);

  return (
    <section>
      <Title>Reviews</Title>
      <ul>
        {status === resolved &&
          reviews.map(review => {
            const { author, content, id } = review;
            return (
              <Card key={id}>
                <ReviewCard author={author} content={content} />
              </Card>
            );
          })}
      </ul>
    </section>
  );
};

export default Reviews;
