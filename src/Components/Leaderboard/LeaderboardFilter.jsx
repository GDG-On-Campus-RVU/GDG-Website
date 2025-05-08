import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortFilter({ sortValue, onSortChange }) {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="sort-select-label">Sort by</InputLabel>
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={sortValue}
        label="Sort by"
        onChange={handleChange}
      >
        <MenuItem value="rank">Rank</MenuItem>
        <MenuItem value="score">Score</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="time">Time</MenuItem>
      </Select>
    </FormControl>
  );
}
