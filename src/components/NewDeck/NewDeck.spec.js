import React from 'react';
import { shallow } from 'enzyme';
import { NewDeck } from './NewDeck';

describe('NewDeck', () => {
  const newDeck = shallow(<NewDeck />);

  it('renders properly', () => {
    expect(newDeck).toMatchSnapshot();
  });
});
