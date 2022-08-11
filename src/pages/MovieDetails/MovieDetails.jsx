import { Outlet, useParams } from 'react-router-dom';
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
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(idle);

  const { movieId } = useParams();

  useEffect(() => {
    setStatus(pending);
    getMovieById(movieId)
      .then(r => setMovie(r))
      .then(setStatus(resolved))
      .catch(setStatus(rejected));
  }, [movieId]);

  return (
    <section>
      {status === resolved && (
        <>
          <button type="button">Back</button>
          <img
            src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
            alt={movie.original_title}
          />
          <h1>
            {movie.original_title} {`(${movie.release_date.slice(0, 3)})`}
          </h1>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>
            {movie.genres.reduce(
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
