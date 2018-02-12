import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as deckSelectors } from 'state/modules/decks';

export class DeckDetails extends Component {
  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { title } = this.props.deck;
    return (
      <div>
        <button onClick={this.goBack.bind(this)}>Go back</button>
        <h2 className="deck-title">{title}</h2>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { deckId } = ownProps.match.params;
  console.log(deckId);
  return {
    deck: deckSelectors.getDeckById(state, deckId)
  };
}

export default connect(mapStateToProps, null)(DeckDetails);
