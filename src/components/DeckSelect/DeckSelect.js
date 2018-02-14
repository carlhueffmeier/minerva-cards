import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectors as deckSelectors } from 'state/modules/decks';

export class DeckSelect extends Component {
  state = {
    deckId: this.props.initialSelection || null
  };

  handleChange(event) {
    this.setState({ deckId: event.target.value });
    // Optional callback
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }

  render() {
    const { decks } = this.props;
    return (
      <div>
        <label>
          Deck:
          <select
            name="deck"
            value={this.state.deckId}
            onChange={this.handleChange.bind(this)}
          >
            {decks.map(deck => (
              <option key={deck.id} value={deck.id}>
                {deck.title}
              </option>
            ))}
            <option>-- New Deck --</option>
          </select>
        </label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: deckSelectors.getAllDecks(state)
  };
}

export default connect(mapStateToProps, null)(DeckSelect);
