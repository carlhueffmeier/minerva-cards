import React, { Component } from 'react';
import Button from 'components/Button';
import NewDeck from 'components/NewDeck';
import { Link } from 'react-router-dom';

export default class Inbox extends Component {
  goToReview() {
    this.props.history.push(`/review`);
  }

  render() {
    return (
      <div>
        <h1>Inbox</h1>
        <ul className="deck-list">
          {this.props.decks.map(deck => (
            <li key={deck.id}>
              <Link to={`/decks/${deck.id}`}>{deck.title}</Link>
            </li>
          ))}
        </ul>

        <NewDeck />

        <Button onClick={this.goToReview.bind(this)}>Start Learning</Button>
      </div>
    );
  }
}
