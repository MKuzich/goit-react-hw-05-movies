import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { getMovieById } from 'services/api';
import { useState, useEffect } from 'react';
import { Section } from './MovieDetails.styled';
import {
  BackLink,
  MoreLink,
  Poster,
  Title,
  SecondaryTitle,
  Block,
} from './MovieDetails.styled';
import { Box } from 'components/Box';

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
            <Box display="flex" gridGap={5}>
              <Poster
                src={'https://image.tmdb.org/t/p/original/' + poster_path}
                alt={original_title}
              />
              <Box>
                <Box display="flex" flexDirection="column" pl={4} pt={4}>
                  <Title>
                    {original_title} {`(${release_date.slice(0, 4)})`}
                  </Title>
                  <p>User Score: {vote_average * 10}%</p>
                </Box>
                <Block>
                  <SecondaryTitle>Overview</SecondaryTitle>
                  <p>{overview}</p>
                </Block>
                <Block>
                  <SecondaryTitle>Genres</SecondaryTitle>
                  <p>
                    {genres
                      .reduce((allGenres, genre) => {
                        allGenres.push(genre.name);
                        return allGenres;
                      }, [])
                      .join(', ')}
                  </p>
                </Block>
                <Block>
                  <SecondaryTitle>Additional information</SecondaryTitle>
                  <MoreLink to="cast">Cast</MoreLink>
                  <MoreLink to="reviews">Reviews</MoreLink>
                </Block>
              </Box>
            </Box>
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
