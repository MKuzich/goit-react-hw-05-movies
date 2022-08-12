import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieById } from 'services/api';
import { useState, useEffect } from 'react';

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
    <section>
      {status === resolved && (
        <>
          <Link to={backLinkHref}>Back</Link>
          <img
            src={'https://image.tmdb.org/t/p/original/' + poster_path}
            alt={original_title}
          />
          <h1>
            {original_title} {`(${release_date.slice(0, 3)})`}
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
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {status === idle && <p>HI HI HI !!!</p>}
    </section>
  );
};

export default MovieDetails;
