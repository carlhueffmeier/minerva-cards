import React from 'react';
import PropTypes from 'prop-types';
import { DeckSelect, TypeSelect, FieldInput, BackButton } from 'components';

AddNote.propTypes = {
  onSave: PropTypes.func.isRequired,
  deckId: PropTypes.string.isRequired,
  onDeckChange: PropTypes.func.isRequired,
  typeId: PropTypes.string.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  fieldValues: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

function AddNote(props) {
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page refresh
    props.onSave();
  }

  return (
    <div>
      <BackButton />
      <form onSubmit={handleSubmit}>
        <DeckSelect value={props.deckId} onChange={props.onDeckChange} />
        <TypeSelect value={props.typeId} onChange={props.onTypeChange} />
        <FieldInput
          typeId={props.typeId}
          values={props.fieldValues}
          onFieldChange={props.onFieldChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddNote;
