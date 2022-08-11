import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieById } from 'services/api';
import { useState, useEffect } from 'react';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(getMovieById(id));
  }, []);

  const { poster_path, original_title, release_date, overview, genres } = movie;
  return (
    <section>
      <button type="button">Back</button>
      <img src="" alt="" />
      <h1></h1>
      <p></p>
      <h2>Overview</h2>
      <p></p>
      <h2>Genres</h2>
      <p></p>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
