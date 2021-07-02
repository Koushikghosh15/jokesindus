import React from 'react';
import './style.css';

import RandomJokesList from './components/jokes/randomJokes/RandomJokesList.js';
function App() {
  return (
    <div className="App">
      <section>
        <h1>jokes</h1>
      </section>
      <section>
        <RandomJokesList />
      </section>
    </div>
  );
}
