export default function LeaderboardRow({ rank, name, score, index }) {
    const colors = [
      "bg-red-50",     // Google Red
      "bg-blue-50",    // Google Blue
      "bg-yellow-50",  // Google Yellow
      "bg-green-50",   // Google Green
    ];
    const rowColor = colors[index % colors.length];
  
    return (
      <tr className={`${rowColor} hover:bg-gray-100 transition`}>
        <td className="p-3 text-left">{rank}</td>
        <td className="p-3 text-left">{name}</td>
        <td className="p-3 text-left">{score}</td>
      </tr>
    );
  }
  
