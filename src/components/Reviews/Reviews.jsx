import { getMovieReviews } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';

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
    <ul>
      {status === resolved &&
        reviews.map(review => {
          const { author, content, id } = review;
          return (
            <li key={id}>
              <ReviewCard author={author} content={content} />
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
