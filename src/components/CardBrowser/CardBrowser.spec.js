import React from 'react';
import { shallow } from 'enzyme';
import CardBrowser from './CardBrowser';

describe('CardBrowser', () => {
  const props = {
    rows: [
      {
        id: `card-1`,
        deck: `Kanji`,
        template: `Kanji (Production)`,
        type: `Kanji (Production + Reading)`
      },
      {
        id: `card-2`,
        deck: `Kanji`,
        template: `Kanji (Reading)`,
        type: `Kanji (Production + Reading)`
      }
    ]
  };
  const browser = shallow(<CardBrowser {...props} />);

  it('renders properly', () => {
    expect(browser).toMatchSnapshot();
  });
});
