import React, { Component } from 'react';
import PropTypes from 'prop-types';

const optionType = PropTypes.shape({
  id: PropTypes.string.isRequired // every option needs an id
});

export default class Select extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired, // e.g. "select deck"
    options: PropTypes.arrayOf(optionType).isRequired, // possible values
    value: PropTypes.string.isRequired, // current value
    display: PropTypes.func.isRequired, // specifies how to display an option
    onChange: PropTypes.func.isRequired, // receives the id of new option
    onAdd: PropTypes.func // optional handler to add new option
  };

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { title, options, value, display, onAdd } = this.props;

    return (
      <div>
        <label>
          <span className="select__title">{title}</span>
          <select
            name="type"
            value={value}
            onChange={this.handleChange.bind(this)}
          >
            {options.map(option => (
              <option
                className="select__option"
                key={option.id}
                value={option.id}
              >
                {display(option)}
              </option>
            ))}
          </select>
        </label>
        {onAdd && <button onAdd={onAdd}>+</button>}
      </div>
    );
  }
}
