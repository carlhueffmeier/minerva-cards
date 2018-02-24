// This line in `DeckDetails.js` causes the test to fail:
//
// import { CardBrowser, BackButton } from 'components';
//
// The `index.js` file exports the `DeckDetailsContainer` component as
// `DeckDetails`. For some undetermined reason this import is triggered,
// which results in an invariant violation.
//
// My understanding of `import` mechanics seems to be lacking.
// Further investigation required.

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
