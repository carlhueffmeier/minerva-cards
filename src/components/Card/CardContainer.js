import { connect } from 'react-redux';
import { selectors as cardSelectors } from 'state/modules/cards';
import { selectors as noteSelectors } from 'state/modules/notes';
import { selectors as templateSelectors } from 'state/modules/templates';
import Card from './Card';

function mapStateToProps(state, ownProps) {
  const card = cardSelectors.getCardById(state, ownProps.id);
  const note = noteSelectors.getNoteById(state, card.note);
  const template = templateSelectors.getTemplateById(state, card.template);

  return {
    fields: note.fields,
    template
  };
}

export default connect(mapStateToProps, null)(Card);
