import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const MovieDetails = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
