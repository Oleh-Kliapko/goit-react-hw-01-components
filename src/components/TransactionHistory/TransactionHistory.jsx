import transactions from '../transactions.json';
import { TransactionWrapper, Title } from './TransactionHistory.styled';
import { TransactionList } from './TransactionList/TransactionList';

export const TransactionHistory = () => {
  return (
    <TransactionWrapper>
      <Title>TRANSACTION HISTORY</Title>
      <TransactionList transactions={transactions} />
    </TransactionWrapper>
  );
};
