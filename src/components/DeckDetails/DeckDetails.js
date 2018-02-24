import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { CardBrowser, BackButton } from 'components';
// See comment in `DeckDetails.spec.js`
import CardBrowser from 'components/CardBrowser';
import BackButton from 'components/BackButton';

class DeckDetails extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    deck: PropTypes.object
  };

  handleAddNote() {
    this.props.history.push(`${this.props.location.pathname}/add-note`);
  }

  render() {
    const { deck } = this.props;

    if (!deck) {
      return (
        <div>
          <h2>Deck not found!</h2>
          <BackButton />
        </div>
      );
    }

    return (
      <div>
        <BackButton />
        <h2 className="deck-details__title">Deck: {deck.title}</h2>
        <button onClick={this.handleAddNote.bind(this)}>Add Note</button>
        <CardBrowser deck={deck.id} />
      </div>
    );
  }
}

export default DeckDetails;
