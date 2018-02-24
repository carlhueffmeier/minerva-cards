import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('Select', () => {
  const props = {
    title: `Choose Deck`,
    options: [{ id: `1`, name: `Default` }, { id: `2`, name: `Kanji` }],
    value: `2`,
    display: option => option.name,
    onChange: newValue => console.log(newValue)
  };

  const select = shallow(<Select {...props} />);

  it('renders properly', () => {
    expect(select).toMatchSnapshot();
  });

  it('displays the title', () => {
    expect(select.find(`.select__title`).text()).toEqual(props.title);
  });

  it('renders the right number of options', () => {
    expect(select.find(`.select__option`)).toHaveLength(2);
  });
});
