import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as deckSelectors } from 'state/modules/decks';

export class DeckDetails extends Component {
  handleGoBack() {
    this.props.history.goBack();
  }

  handleAddNote() {
    this.props.history.push(`/add-note`);
  }

  render() {
    const { title } = this.props.deck;
    return (
      <div>
        <button onClick={this.handleGoBack.bind(this)}>Go back</button>
        <h2 className="deck-title">{title}</h2>
        <button onClick={this.handleAddNote.bind(this)}>Add Note</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { deckId } = ownProps.match.params;
  return {
    deck: deckSelectors.getDeckById(state, deckId)
  };
}

export default connect(mapStateToProps, null)(DeckDetails);
