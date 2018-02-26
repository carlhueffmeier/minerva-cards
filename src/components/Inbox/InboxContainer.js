import { connect } from 'react-redux';
import { selectors as deckSelectors } from 'state/modules/decks';
import Inbox from './Inbox';

function mapStateToProps(state, ownProps) {
  return {
    decks: deckSelectors.getAllDecks(state)
  };
}

export default connect(mapStateToProps, null)(Inbox);
