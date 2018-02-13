import React from 'react';
import { shallow } from 'enzyme';
import DeckSelect from './DeckSelect';

describe('DeckSelect', () => {
  const deckSelect = shallow(<DeckSelect />);

  it('renders properly', () => {
    expect(deckSelect).toMatchSnapshot();
  });
});
