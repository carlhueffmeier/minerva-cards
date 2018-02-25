import React from 'react';
import PropTypes from 'prop-types';

const cardType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired
  // deck: PropTypes.string.isRequired,
  // type: PropTypes.string.isRequired,
});

CardBrowser.propTypes = {
  cards: PropTypes.arrayOf(cardType).isRequired
};

function CardBrowser(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Deck</th>
            <th>Type</th>
            <th>Note</th>
            <th>Template</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {props.cards.map(card => (
            <tr key={card.id}>
              <td>{card.deck}</td>
              <td>{card.type}</td>
              <td>{card.note}</td>
              <td>{card.template}</td>
              <td>{JSON.stringify(card.fields)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardBrowser;
