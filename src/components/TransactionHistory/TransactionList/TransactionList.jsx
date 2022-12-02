import css from './TransactionList.module.css';
import PropTypes from 'prop-types';
import { TransactionListItem } from '../TransactionListItem/TransactionListItem';

export const TransactionList = ({ transactions }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <TransactionListItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        );
      })}
    </table>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
