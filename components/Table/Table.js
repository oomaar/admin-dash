import { tableHeadings, tableRows } from "../../data/tableData";
import {
    TableContainer,
    TableTitle,
    TableLayout,
    TableHead,
    TableRow,
    TableHeading,
    TableBody,
    TableCell,
} from "./styledTable";

export const Table = () => {
    const tableHeadingsData = tableHeadings.map(heading => (
        <TableHeading key={heading.id}>
            {heading.text}
        </TableHeading>
    ));

    const tableRowsData = tableRows.map(row => (
        <TableRow key={row.id}>
            {row.cells.map(cell => (
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
                <TableHead>
                    <TableRow>
                        {tableHeadingsData}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableRowsData}
                </TableBody>
            </TableLayout>
            <a href="#">Show All</a>
        </TableContainer>
    );
};