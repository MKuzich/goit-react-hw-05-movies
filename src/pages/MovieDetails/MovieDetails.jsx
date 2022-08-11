import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieById } from 'services/api';

const MovieDetails = ({ id }) => {
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
