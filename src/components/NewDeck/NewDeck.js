import React, { Component } from 'react';
import { connect } from 'react-redux';
import { operations as deckOperations } from 'state/modules/decks';

export class NewDeck extends Component {
  state = {
    deckTitle: ``
  };

  handleChange(event) {
    this.setState({
      deckTitle: event.target.value
    });
  }

  handleSubmit(event) {
    const newDeckTitle = this.state.deckTitle.trim();
    this.props.addDeck(newDeckTitle);
    this.setState({ deckTitle: `` });
    event.preventDefault();
  }

  render() {
    const { deckTitle } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input value={deckTitle} onChange={this.handleChange.bind(this)} />
        <button>Add</button>
      </form>
    );
  }
}

export default connect(null, { addDeck: deckOperations.addDeck })(NewDeck);
