import { getMovieCast } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorCard } from '../ActorCard/ActorCard';
import { List, Card, Title } from './Cast.styled';

const Status = {
  idle: 'IDLE',
  pending: 'PENDING',
  resolved: 'RESOLVED',
  rejected: 'REJECTED',
};
const { idle, pending, resolved, rejected } = Status;

const Cast = () => {
  const [cast, setCast] = useState();
  const [status, setStatus] = useState(idle);
  const { movieId } = useParams();

  useEffect(() => {
    setStatus(pending);
    getMovieCast(movieId)
      .then(r => {
        setCast(r);
        setStatus(resolved);
      })
      .catch(error => {
        console.log(error);
        setStatus(rejected);
      });
  }, [movieId]);
  return (
    <section>
      <Title>Cast</Title>
      <List>
        {status === resolved &&
          cast.map(actor => {
            const { profile_path, name, character, id } = actor;
            return (
              <Card key={id}>
                <ActorCard
                  photo={profile_path}
                  name={name}
                  character={character}
                />
              </Card>
            );
          })}
      </List>
    </section>
  );
};

export default Cast;
