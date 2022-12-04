import PropTypes from 'prop-types';
import { StatList } from './StatisticsList.styled';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';

export const StatisticsList = ({ data }) => {
  return (
    <StatList>
      {data.map(({ id, label, percentage }) => {
        return (
          <StatisticsItem key={id} label={label} percentage={percentage} />
        );
      })}
    </StatList>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
