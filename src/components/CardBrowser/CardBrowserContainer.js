import { connect } from 'react-redux';
import { selectors as noteSelectors } from 'state/modules/notes';
import CardBrowser from './CardBrowser';

function mapStateToProps(state, ownProps) {
  const { deck } = ownProps;
  return {
    notes: noteSelectors.getNotesByDeck(state, deck) || []
  };
}

export default connect(mapStateToProps, null)(CardBrowser);
