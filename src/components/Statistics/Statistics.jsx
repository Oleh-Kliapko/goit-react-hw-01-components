import upcomingData from '../../components/data.json';
import css from './Statistics.module.css';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>UPLOAD STATS</h2>
      <StatisticsList data={upcomingData} />
    </section>
  );
};
