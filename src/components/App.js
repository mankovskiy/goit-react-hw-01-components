// import styled from 'styled-components';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { FriendList } from './FriendList/FriendList';

import { Section } from './SectionStat/SectionStat';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import { Profile } from './Profile/Profile';
import { Box } from '../components/Box';
// import { Statistics } from './Statistics/Statistics';

export function App() {
  return (
    <div>
      <Box display="flex" justifyContent="center" pt={20} as="section">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      <Box display="flex" justifyContent="center" mt={20} pt={20}>
        <Section title="Upload stats">
          <StatisticsList lists={data} />
        </Section>
      </Box>
      <Box display="flex" justifyContent="center" pt={20}>
        <FriendList friends={friends} />
      </Box>
      <Box display="flex" justifyContent="center" pt={20}>
        <TransactionHistory items={transactions} />
      </Box>
    </div>
  );
}
