import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardBrowser from 'components/CardBrowser';
import BackButton from 'components/BackButton';
import Card from 'components/Card';

class DeckDetails extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    deck: PropTypes.object
  };

  state = {
    selectedCard: null
  };

  handleAddNote() {
    this.props.history.push(`${this.props.location.pathname}/add-note`);
  }

  handleCardSelected(id) {
    this.setState({ selectedCard: id });
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
        <CardBrowser
          deck={deck.id}
          onSelect={this.handleCardSelected.bind(this)}
        />
        {this.state.selectedCard && <Card id={this.state.selectedCard} />}
      </div>
    );
  }
}

export default DeckDetails;
