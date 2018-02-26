import PropTypes from 'prop-types';

const cardId = PropTypes.string;

const deckId = PropTypes.string;

const noteId = PropTypes.string;
const noteFields = PropTypes.object;

const templateId = PropTypes.string;
const template = PropTypes.shape({
  id: templateId.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired
});

const typeId = PropTypes.string;

export default {
  cardId,
  deckId,
  noteId,
  noteFields,
  templateId,
  template,
  typeId
};
