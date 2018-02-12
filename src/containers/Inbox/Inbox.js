import React from 'react';
import { Button } from 'components';
import { connect } from 'react-redux';
import { selectors as deckSelectors } from 'state/modules/decks';
import { NewDeck } from 'components';
import { Link } from 'react-router-dom';

function goToReview() {
  console.log('changing route');
}

export function Inbox(props) {
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
      <ul className="deck-list">
        {props.decks.map(deck => (
          <li key={deck.id}>
            <Link to={`/decks/${deck.id}`}>{deck.title}</Link>
          </li>
        ))}
      </ul>

      <NewDeck />

      <Button onClick={goToReview}>Start Learning</Button>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    decks: deckSelectors.getAllDecks(state)
  };
}

export default connect(mapStateToProps, null)(Inbox);
