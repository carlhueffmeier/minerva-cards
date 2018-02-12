import React from 'react';
import { shallow } from 'enzyme';
import { DeckDetails } from './DeckDetails';

describe('DeckDetails', () => {
  const props = {
    deck: { id: 1, title: `__TEST__` }
  };
  const deckDetails = shallow(<DeckDetails {...props} />);

  it('renders properly', () => {
    expect(deckDetails).toMatchSnapshot();
  });

  it('displays the correct title', () => {
    expect(deckDetails.find(`.deck-title`).text()).toEqual(props.deck.title);
  });
});
