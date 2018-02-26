import React from 'react';
import PropTypes from 'prop-types';
import commonPropTypes from 'utils/commonPropTypes';

const rowType = PropTypes.shape({
  id: commonPropTypes.cardId.isRequired,
  deck: PropTypes.string.isRequired,
  template: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

CardBrowser.propTypes = {
  rows: PropTypes.arrayOf(rowType).isRequired,
  onSelect: PropTypes.func // (optional) receives the selected row
};

function CardBrowser(props) {
  const { rows, onSelect } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Deck</th>
            <th>Type</th>
            <th>Template</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id} onClick={() => onSelect && onSelect(row.id)}>
              <td>{row.deck}</td>
              <td>{row.type}</td>
              <td>{row.template}</td>
              <td>{JSON.stringify(row.fields)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardBrowser;
