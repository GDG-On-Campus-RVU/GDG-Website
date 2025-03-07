import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamSection from './Components/Teamsection/teamsection';
import TeamPage from "./Components/TeamPage/TeamPage.jsx";
import EventPage from "./Components/EventPage/EventPage.jsx";

function App() {
  return (
    <Router>
      <div className="sub-root">
        <Routes>
          <Route path="/" element={<TeamSection />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/event" element={<EventPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
