import { Statistics } from '../Statistics/Statistics';
import {
  StatisticsColorList,
  StatisticsItem,
} from '../StatisticsList/StatisticsList.styled';

export function StatisticsList({ lists }) {
  return (
    <StatisticsColorList>
      {lists.map(list => (
        <StatisticsItem key={list.id}>
          <Statistics label={list.label} percentage={list.percentage} />
        </StatisticsItem>
      ))}
    </StatisticsColorList>
  );
}
