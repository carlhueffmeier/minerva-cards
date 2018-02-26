import { connect } from 'react-redux';
import { selectors as cardSelectors } from 'state/modules/cards';
import { selectors as noteSelectors } from 'state/modules/notes';
import { selectors as deckSelectors } from 'state/modules/decks';
import { selectors as templateSelectors } from 'state/modules/templates';
import { selectors as typeSelectors } from 'state/modules/types';
import CardBrowser from './CardBrowser';

function mapStateToProps(state, ownProps) {
  const { deck } = ownProps;
  const cards = cardSelectors.getCardsByDeck(state, deck);
  const rows = cards.map(card => {
    const note = noteSelectors.getNoteById(state, card.note);
    const deck = deckSelectors.getDeckById(state, note.deck);
    const template = templateSelectors.getTemplateById(state, card.template);
    const type = typeSelectors.getTypeById(state, note.type);
    return {
      id: card.id,
      deck: deck.title,
      template: template.name,
      type: type.name,
      fields: note.fields
    };
  });

  return {
    rows
  };
}

export default connect(mapStateToProps, null)(CardBrowser);
