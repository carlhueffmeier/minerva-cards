import React from 'react';
import commonPropTypes from 'utils/commonPropTypes';
import { renderTemplate } from 'utils/template';

Card.propTypes = {
  id: commonPropTypes.cardId.isRequired,
  template: commonPropTypes.template.isRequired,
  fields: commonPropTypes.noteFields.isRequired
};

function Card(props) {
  const { template, fields } = props;
  const front = renderTemplate(template.front, fields);
  const back = renderTemplate(template.back, { Front: front, ...fields });
  return (
    <div>
      <p>{front}</p>
      <p>{back}</p>
    </div>
  );
}

export default Card;
