import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieById } from 'services/api';
import { useState, useEffect } from 'react';
import { Section } from './MovieDetails.styled';
import { BackLink, MoreLink } from './MovieDetails.styled';

const Status = {
  idle: 'IDLE',
  pending: 'PENDING',
  resolved: 'RESOLVED',
  rejected: 'REJECTED',
};
const { idle, pending, resolved, rejected } = Status;

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(idle);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    setStatus(pending);
    getMovieById(movieId)
      .then(r => {
        setMovie(r);
        setStatus(resolved);
      })
      .catch(error => {
        console.log(error);
        setStatus(rejected);
      });
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <main>
      <Section>
        {status === resolved && (
          <>
            <BackLink to={backLinkHref}>Back</BackLink>
            <img
              src={'https://image.tmdb.org/t/p/original/' + poster_path}
              alt={original_title}
            />
            <h1>
              {original_title} {`(${release_date.slice(0, 4)})`}
            </h1>
            <p>User Score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>
              {genres.reduce(
                (allGenres, genre) => allGenres + ', ' + genre.name,
                ''
              )}
            </p>
            <h2>Additional information</h2>
            <MoreLink to="cast">Cast</MoreLink>
            <MoreLink to="reviews">Reviews</MoreLink>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </>
        )}
        {status === idle && <p>HI HI HI !!!</p>}
      </Section>
    </main>
  );
};

export default MovieDetails;
