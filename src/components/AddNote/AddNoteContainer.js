import React, { Component } from 'react';
import { connect } from 'react-redux';
import { operations as noteOperations } from 'state/modules/notes';
import { selectors as typeSelectors } from 'state/modules/types';
import AddNote from './AddNote';

class AddNoteContainer extends Component {
  state = {
    deckId: this.props.match.params.deckId || ``,
    typeId: this.props.initialType,
    fields: {}
  };

  handleSave() {
    const newNote = {
      deck: this.state.deckId,
      type: this.state.typeId,
      fields: this.state.fields
    };
    this.props.addNote(newNote); // Save to redux store
    this.setState({ fields: {} });
  }

  handleFieldChange(field, value) {
    this.setState(state => ({
      ...state,
      fields: {
        ...state.fields,
        [field]: value
      }
    }));
  }

  handleDeckChange(deckId) {
    this.setState({ deckId });
  }

  handleTypeChange(typeId) {
    this.setState({ typeId });
    this.setState({ fields: {} });
  }

  render() {
    return (
      <AddNote
        onSave={this.handleSave.bind(this)}
        deckId={this.state.deckId}
        onDeckChange={this.handleDeckChange.bind(this)}
        typeId={this.state.typeId}
        onTypeChange={this.handleTypeChange.bind(this)}
        fieldValues={this.state.fields}
        onFieldChange={this.handleFieldChange.bind(this)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    // This SHOULD be the default type for this deck (future improvement)
    initialType: typeSelectors.getAllTypes(state)[0].id
  };
}

export default connect(mapStateToProps, { addNote: noteOperations.addNote })(
  AddNoteContainer
);
