import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

describe('Root', () => {
  const root = shallow(<Root />);

  it('renders properly', () => {
    expect(root).toMatchSnapshot();
  });
});
