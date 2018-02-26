import { connect } from 'react-redux';
import { selectors as cardSelectors } from 'state/modules/cards';
import Review from './Review';

function mapStateToProps(state, ownProps) {
  const { deckId } = ownProps.match.params;
  return {
    cards: deckId
      ? cardSelectors.getCardsByDeck(state, deckId)
      : cardSelectors.getAllCards(state)
  };
}

export default connect(mapStateToProps)(Review);
