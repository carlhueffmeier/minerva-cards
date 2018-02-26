import React from 'react';
import { connect } from 'react-redux';
import { selectors as typeSelectors } from 'state/modules/types';
import Select from 'components/Select';

function TypeSelectContainer(props) {
  return (
    <Select
      title="Select Type"
      options={props.types}
      value={props.value}
      display={type => type.name}
      onChange={props.onChange}
    />
  );
}

function mapStateToProps(state) {
  return {
    types: typeSelectors.getAllTypes(state)
  };
}

export default connect(mapStateToProps, null)(TypeSelectContainer);
