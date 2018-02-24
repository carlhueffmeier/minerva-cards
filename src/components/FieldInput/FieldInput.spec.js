import React from 'react';
import { shallow } from 'enzyme';
import FieldInput from './FieldInput';

describe('FieldInput', () => {
  const props = {
    fields: [`Kanji`, `Reading`, `Examples`],
    values: {
      Kanji: `犬`,
      Reading: `いぬ`,
      Examples: `賢い犬だな。`
    },
    onFieldChange: () => null
  };

  const wrapper = shallow(<FieldInput {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
