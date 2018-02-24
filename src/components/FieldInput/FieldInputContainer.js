import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectors as typeSelectors } from 'state/modules/types';
import FieldInput from './FieldInput';

FieldInputContainer.propTypes = {
  typeId: PropTypes.string.isRequired,
  type: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  onFieldChange: PropTypes.func.isRequired
};

function FieldInputContainer(props) {
  const { type = {}, values } = props;
  return (
    <FieldInput
      fields={type.fields || {}}
      values={values}
      onFieldChange={props.onFieldChange}
    />
  );
}

function mapStateToProps(state, ownProps) {
  const { typeId } = ownProps;
  return {
    type: typeSelectors.getTypeById(state, typeId)
  };
}

export default connect(mapStateToProps, null)(FieldInputContainer);
