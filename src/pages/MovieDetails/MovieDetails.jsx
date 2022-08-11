import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = ({}) => {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetails;
