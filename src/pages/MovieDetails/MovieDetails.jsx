import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieById } from 'services/api';
import { useState, useEffect } from 'react';

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(getMovieById(id));
  }, []);

  return (
    <section>
      <button type="button">Back</button>
      <img src="" alt="" />
      <h1></h1>
      <p></p>
      <h2></h2>
      <p></p>
      <h2></h2>
      <p></p>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
