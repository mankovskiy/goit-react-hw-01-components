import { TableHead } from '../TransactionHistory/TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <table>
      <thead>
        <TableHead>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TableHead>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
