import React from 'react';
import { shallow } from 'enzyme';
import CardBrowser from './CardBrowser';

describe('CardBrowser', () => {
  const props = {
    notes: [
      {
        id: `1`,
        deck: `Kanji`,
        type: `Kanji`,
        fields: {
          Kanji: `犬`,
          Reading: `いぬ`,
          Examples: `賢い犬だな。`
        }
      }
    ]
  };
  const browser = shallow(<CardBrowser {...props} />);

  it('renders properly', () => {
    expect(browser).toMatchSnapshot();
  });
});
