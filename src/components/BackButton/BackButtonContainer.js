import React from 'react';
import { withRouter } from 'react-router-dom';
import BackButton from './BackButton';

function BackButtonContainer(props) {
  return <BackButton onBack={props.history.goBack} />;
}

export default withRouter(BackButtonContainer);
