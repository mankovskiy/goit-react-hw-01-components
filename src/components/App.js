import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { FriendList } from './FriendList/FriendList';

import { Section } from './SectionStat/SectionStat';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';

export function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
        <StatisticsList lists={data} />
      </Section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
