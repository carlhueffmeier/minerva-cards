import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeckSelect } from 'components';

export default class AddNote {
  state = {
    deckId: this.props.match.params.deckId || null
  };
  render() {
    return (
      <div>
        <form>
          <DeckSelect
            value={this.state.deckId}
            onChange={id => this.setState({ deckId: id })}
          />
          <label>
            Question<input />
          </label>
          <label>
            Answer<input />
          </label>
        </form>
      </div>
    );
  }
}
