import React from 'react';
import PropTypes from 'prop-types';

FieldInput.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

function FieldInput(props) {
  return (
    <div>
      {props.fields.map(fieldId => (
        <label key={fieldId}>
          {fieldId}
          <input
            value={props.values[fieldId] || ``}
            onChange={event => props.onFieldChange(fieldId, event.target.value)}
          />
        </label>
      ))}
    </div>
  );
}

export default FieldInput;
