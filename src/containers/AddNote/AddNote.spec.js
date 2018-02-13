import React from 'react';
import { shallow } from 'enzyme';
import AddNote from './AddNote';

describe('AddNote', () => {
  const addNote = shallow(<AddNote />);

  it('renders properly', () => {
    expect(addNote).toMatchSnapshot();
  });
});
