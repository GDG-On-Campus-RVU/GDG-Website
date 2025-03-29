import { useState, useEffect } from "react";

export default function CountdownTimer({ eventDate }) {
  const [countdown, setCountdown] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;

      if (timeLeft > 0) {
        const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0");
        setCountdown(`${hours}:${minutes}:${seconds}`);
      } else {
        clearInterval(interval);
        setCountdown("Event Started");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="text-3xl font-bold text-yellow-400 bg-gray-900 p-4 rounded-xl shadow-lg">
      ⏳ Countdown: {countdown}
    </div>
  );
}
