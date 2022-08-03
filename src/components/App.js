import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import { FriendList } from './FriendList/FriendList';

import { Section } from './SectionStat/SectionStat';
import { StatisticsList } from './StatisticsList/StatisticsList';

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
      {/* <Statistics
        title="Upload stats"
        label={data[0].label}
        percentage={data[0].percentage}
      /> */}
      {/* <Statistics stats={data} /> */}
    </div>
  );
}
