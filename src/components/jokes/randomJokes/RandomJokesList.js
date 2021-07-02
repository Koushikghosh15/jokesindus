import React, { useState, useEffect } from 'react';
import Joke from '../Joke';
import { getRandomJokes } from '../../../services/JokeServices';

const RandomJokesList = props => {
  const [jokes, setJokes] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const _getRandomJokes = () => {
    setLoading(true);

    getRandomJokes().then(response => {
      if (response.status == 200) {
        setJokes(response.data.results);
      } else {
        setHasError(true);
      }

      setLoading(false);
    });
  };
  useEffect(() => {
    // setLoading(true);
    _getRandomJokes();
  }, []);

  return (
    <ul>
      {loading ? (
        <div>Loading...</div>
      ) : hasError ? (
        <div>Network Error occured.</div>
      ) : (
        jokes.map(joke => <Joke key={joke.id} title={joke.joke} />)
      )}
    </ul>
  );
};

export default RandomJokesList;
