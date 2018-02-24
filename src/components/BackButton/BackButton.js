import React from 'react';
import PropTypes from 'prop-types';

BackButton.propTypes = {
  onBack: PropTypes.func.isRequired
};

function BackButton(props) {
  return <button onClick={props.onBack}>Go Back</button>;
}

export default BackButton;
