import { Statistics } from '../Statistics/Statistics';

export function StatisticsList({ lists }) {
  return (
    // <section class="statistics">
    //   {title && <h2 class="title">{title}</h2>}

    <ul class="stat-list">
      {lists.map(list => (
        <li key={list.id} class="item">
          <Statistics label={list.label} percentage={list.percentage} />
        </li>
      ))}
    </ul>
    // </section>
  );
}
