import PropTypes from 'prop-types';
import { TableValue, TableBody } from './TransactionListItem.styled';

export const TransactionListItem = ({ type, amount, currency }) => {
  return (
    <TableBody>
      <tr>
        <TableValue>{type}</TableValue>
        <TableValue>{amount}</TableValue>
        <TableValue>{currency}</TableValue>
      </tr>
    </TableBody>
  );
};

TransactionListItem.protoTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
