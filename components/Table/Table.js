import { tableHeadings, tableRows } from "../../data/tableData";
import {
  TableContainer,
  TableTitle,
  TableLayout,
  TableRow,
  TableCell,
} from "./styledTable";

export const Table = () => {
  const tableHeadingsData = tableHeadings.map((heading) => (
    <th key={heading.id}>{heading.text}</th>
  ));

  const tableRowsData = tableRows.map((row) => (
    <TableRow key={row.id}>
      {row.cells.map((cell) => (
        <TableCell key={cell.id} className={cell.class}>
          {cell.text}
        </TableCell>
      ))}
    </TableRow>
  ));

  return (
    <TableContainer>
      <TableTitle>Recent Orders</TableTitle>
      <TableLayout>
        <thead>
          <TableRow>{tableHeadingsData}</TableRow>
        </thead>
        <tbody>{tableRowsData}</tbody>
      </TableLayout>
      <a href="#">Show All</a>
    </TableContainer>
  );
};
