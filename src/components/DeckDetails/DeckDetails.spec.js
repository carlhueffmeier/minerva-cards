import React from 'react';
import { shallow } from 'enzyme';
import DeckDetails from './DeckDetails';

describe('DeckDetails', () => {
  const props = {
    history: {
      push: () => null
    },
    location: {
      pathname: '/decks/Kanji'
    },
    deck: { id: 1, title: `Kanji` }
  };
  const deckDetails = shallow(<DeckDetails {...props} />);
  it('renders properly', () => {
    expect(deckDetails).toMatchSnapshot();
  });
  it('displays the correct title', () => {
    expect(deckDetails.find(`.deck-details__title`).text()).toEqual(
      `Deck: ${props.deck.title}`
    );
  });
});
