import upcomingData from '../../components/stats.json';
import { StatisticsWrapper, Title } from './Statistics.styled';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = () => {
  return (
    <StatisticsWrapper>
      <Title>UPLOAD STATS</Title>
      <StatisticsList data={upcomingData} />
    </StatisticsWrapper>
  );
};
