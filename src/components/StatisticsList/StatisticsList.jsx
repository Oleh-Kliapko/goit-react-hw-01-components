import css from './StatisticsList.module.css';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const StatisticsList = ({ data }) => {
  return (
    <ul className={css['stat-list']}>
      {data.map(dataEl => {
        return (
          <StatisticsItem
            key={dataEl.id}
            label={dataEl.label}
            percentage={dataEl.percentage}
          />
        );
      })}
    </ul>
  );
};
