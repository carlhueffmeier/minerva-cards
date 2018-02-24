import React from 'react';
import { connect } from 'react-redux';
import { selectors as deckSelectors } from 'state/modules/decks';
import { Select } from 'components';

function DeckSelectContainer(props) {
  return (
    <Select
      title="Select Deck"
      options={props.decks}
      value={props.value}
      display={deck => deck.title}
      onChange={props.onChange}
    />
  );
}

function mapStateToProps(state) {
  return {
    decks: deckSelectors.getAllDecks(state)
  };
}

export default connect(mapStateToProps, null)(DeckSelectContainer);
