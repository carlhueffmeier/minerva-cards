import React from 'react';
import { Button } from 'components';

function goToReview() {
  console.log('changing route');
}

function Inbox(props) {
  return (
    <div className="App">
      <h1>Inbox</h1>
      <p>Filter by: </p>
      <ul>
        <li>
          <a href="#">Due Decks</a>
        </li>
        <li>
          <a href="#">Active Decks</a>
        </li>
        <li>
          <a href="#">Inactive Decks</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">JavaScript</a>
        </li>
        <li>
          <a href="#">Functional Programming</a>
        </li>
      </ul>

      <Button onClick={goToReview}>Start Learning</Button>
    </div>
  );
}

export default Inbox;
