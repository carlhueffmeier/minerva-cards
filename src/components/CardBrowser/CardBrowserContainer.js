import { connect } from 'react-redux';
import { selectors as noteSelectors } from 'state/modules/notes';
import { selectors as cardSelectors } from 'state/modules/cards';
import CardBrowser from './CardBrowser';

function mapStateToProps(state, ownProps) {
  const { deck } = ownProps;
  const cards = cardSelectors.getCardsByDeck(state, deck);
  const cardsJoinedWithNotes = cards.map(card => ({
    ...noteSelectors.getNoteById(state, card.note),
    ...card
  }));

  return {
    cards: cardsJoinedWithNotes
  };
}

export default connect(mapStateToProps, null)(CardBrowser);
