import React from 'react';
import { shallow } from 'enzyme';
import CardBrowser from './CardBrowser';

describe('CardBrowser', () => {
  const props = {
    cards: [
      {
        id: `card-1`,
        note: `note-1`,
        template: `kanji-production`
      },
      {
        id: `card-2`,
        note: `note-1`,
        template: `kanji-reading`
      }
    ]
  };
  const browser = shallow(<CardBrowser {...props} />);

  it('renders properly', () => {
    expect(browser).toMatchSnapshot();
  });
});
