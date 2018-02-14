import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeckSelect } from 'components';

export class AddNote extends Component {
  handleGoBack() {
    this.props.history.goBack();
  }

  handleSave(event) {
    event.preventDefault();
    // Save to redux store
  }

  state = {
    deckId: this.props.match.params.deckId || null
  };
  render() {
    return (
      <div>
        <button onClick={this.handleGoBack.bind(this)}>Go back</button>
        <form onSubmit={this.handleSave.bind(this)}>
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
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default connect(null, null)(AddNote);
