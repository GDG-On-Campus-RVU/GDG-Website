import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamSection from './Components/Teamsection/teamsection';
import TeamPage from "./Components/TeamPage/TeamPage.jsx";
import EventPage from "./Components/EventPage/EventPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import Blog from './Components/Blog/Blog.jsx';
// import Achivement from './Components/Achivement/Achivement.jsx';
import Leaderboard from "./Components/Leaderboard/main";

function App() {
  return (
    <Router>
      <div className="sub-root">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<TeamSection />} /> */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/event" element={<EventPage/>}/>
          {/* <Route path="/achivement" element={<Achivement/>}/> */}
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/leaderboard" element={<Leaderboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
