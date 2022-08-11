import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const createAsyncComponent = path => lazy(() => import(path));

const Home = createAsyncComponent('../pages/Home/Home');
const Movies = createAsyncComponent('../pages/Movies/Movies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails/MovieDetails');
// const Cast = createAsyncComponent('./Cast/Cast');
// const Reviews = createAsyncComponent('./Reviews/Reviews');
// const Error = createAsyncComponent('../pages/Error/Error');

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          {/* <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
    </>
  );
};
