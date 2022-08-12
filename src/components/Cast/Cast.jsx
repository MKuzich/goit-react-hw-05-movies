import { getMovieCast } from 'services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActorCard } from '../ActorCard/ActorCard';

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
    <ul>
      {status === resolved &&
        cast.map(actor => {
          const { profile_path, name, character, id } = actor;
          return (
            <li key={id}>
              <ActorCard
                photo={profile_path}
                name={name}
                character={character}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
