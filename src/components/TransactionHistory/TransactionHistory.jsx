import transactions from '../transactions.json';
import css from './TransactionHistory.module.css';
import { TransactionList } from './TransactionList/TransactionList';

export const TransactionHistory = () => {
  return (
    <section className={css.transaction}>
      <h2 className={css.title}>TRANSACTION HISTORY</h2>
      <TransactionList transactions={transactions} />
    </section>
  );
};
