import { connect } from 'react-redux';
import { selectors as deckSelectors } from 'state/modules/decks';
import DeckDetails from './DeckDetails';

function mapStateToProps(state, ownProps) {
  const { deckId } = ownProps.match.params;
  return {
    deck: deckSelectors.getDeckById(state, deckId)
  };
}

export default connect(mapStateToProps, null)(DeckDetails);
