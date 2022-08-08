import {
  Table,
  TableHead,
  TableDescrString,
  TableItem,
} from '../TransactionHistory/TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TableDescrString key={item.id}>
            <TableItem>{item.type}</TableItem>
            <TableItem>{item.amount}</TableItem>
            <TableItem>{item.currency}</TableItem>
          </TableDescrString>
        ))}
      </tbody>
    </Table>
  );
}
