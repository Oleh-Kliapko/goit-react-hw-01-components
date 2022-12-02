import css from './TransactionListItem.module.css';
import PropTypes from 'prop-types';

export const TransactionListItem = ({ type, amount, currency }) => {
  return (
    <tbody className={css.tbody}>
      <tr>
        <td className={css.td}>{type}</td>
        <td className={css.td}>{amount}</td>
        <td className={css.td}>{currency}</td>
      </tr>
    </tbody>
  );
};

TransactionListItem.protoTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
