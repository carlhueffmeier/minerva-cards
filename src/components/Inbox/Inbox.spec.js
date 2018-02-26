import React from 'react';
import { shallow } from 'enzyme';
import Inbox from './Inbox';

describe('Inbox', () => {
  const props = {
    decks: [{ id: 1, title: `__TEST__` }]
  };
  const inbox = shallow(<Inbox {...props} />);

  it('renders properly', () => {
    expect(inbox).toMatchSnapshot();
  });
});
