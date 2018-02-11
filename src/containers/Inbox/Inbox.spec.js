import React from 'react';
import { shallow } from 'enzyme';
import Inbox from './Inbox';

describe('Inbox', () => {
  const inbox = shallow(<Inbox />);

  it('renders properly', () => {
    expect(inbox).toMatchSnapshot();
  });
});
