import React, { useState } from "react";
import TemplatePage from "../TemplatePage/TemplatePage";
import LeaderboardHeader from "./LeaderboardHeader";
import LeaderboardTable from "./LeaderboardTable";

const initialData = [
  { rank: 1, name: "Alice", score: 950, time: 120 },
  { rank: 2, name: "Bob", score: 880, time: 130 },
  { rank: 3, name: "Charlie", score: 860, time: 110 },
  { rank: 4, name: "David", score: 840, time: 125 },
  { rank: 5, name: "Eve", score: 810, time: 140 },
];

export default function Leaderboard() {
  const [sortBy, setSortBy] = useState("rank");

  const handleSortChange = (value) => setSortBy(value);

  const sortedData = [...initialData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a[sortBy] - b[sortBy]; 
    }
  });

  return (
    <TemplatePage>
      <LeaderboardHeader sortValue={sortBy} onSortChange={handleSortChange} />
      <LeaderboardTable data={sortedData} />
    </TemplatePage>
  );
}

