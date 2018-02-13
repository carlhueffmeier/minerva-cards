import React from 'react';
import { shallow } from 'enzyme';
import { Review } from './Review';

describe('Review', () => {
  const review = shallow(<Review />);

  it('renders properly', () => {
    expect(review).toMatchSnapshot();
  });
});
