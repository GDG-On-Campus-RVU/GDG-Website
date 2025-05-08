import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const leaderboardData = [
  { rank: 1, name: 'Alice', score: 950, time: 120 },
  { rank: 2, name: 'Bob', score: 880, time: 130 },
  { rank: 3, name: 'Charlie', score: 860, time: 110 },
  { rank: 4, name: 'David', score: 840, time: 125 },
  { rank: 5, name: 'Eve', score: 810, time: 140 },
  { rank: 6, name: 'Frank', score: 780, time: 115 },
  { rank: 7, name: 'Grace', score: 760, time: 135 },
  { rank: 8, name: 'Hannah', score: 740, time: 150 },
];

const LeaderboardTable = () => {
  const columns = useMemo(
    () => [
      { accessorKey: 'rank', header: 'Rank' },
      { accessorKey: 'name', header: 'Name' },
      { accessorKey: 'score', header: 'Score' },
      { accessorKey: 'time', header: 'Time (s)' },
    ],
    []
  );

  const rowColors = ['#E3F2FD', '#FFEBEE', '#FFF8E1', '#E8F5E9']; // blue, red, yellow, green

  const table = useMaterialReactTable({
    columns,
    data: leaderboardData,
    enableColumnResizing: true,
    enableSorting: true,
    enableTopToolbar: false,
    muiTableBodyRowProps: ({ row }) => ({
      sx: {
        backgroundColor: rowColors[row.index % 4],
      },
    }),
  });

  return (
    <div style={{ margin: '20px' }}>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default LeaderboardTable;




