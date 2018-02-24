import React from 'react';
import PropTypes from 'prop-types';

const noteType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  deck: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

CardBrowser.propTypes = {
  notes: PropTypes.arrayOf(noteType).isRequired
};

function CardBrowser(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Deck</th>
            <th>Type</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {props.notes.map(note => (
            <tr key={note.id}>
              <td>{note.deck}</td>
              <td>{note.type}</td>
              <td>{JSON.stringify(note.fields)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardBrowser;
