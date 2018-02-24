import React from 'react';
import { shallow } from 'enzyme';
import AddNote from './AddNote';

describe('AddNote', () => {
  const props = {
    onSave: () => null,
    deckId: `deck-1`,
    onDeckChange: () => null,
    typeId: `type-1`,
    onTypeChange: () => null,
    fieldValues: {},
    onFieldChange: () => null
  };
  const addNote = shallow(<AddNote {...props} />);

  it('renders properly', () => {
    expect(addNote).toMatchSnapshot();
  });
});
