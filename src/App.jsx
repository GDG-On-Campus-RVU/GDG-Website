import './App.css'
import TemplatePage from './Components/TemplatePage/TemplatePage.jsx';
import TeamPage from "./Components/TeamPage/TeamPage.jsx"
import Blog from './Components/Blog/Blog.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
function App() {
  return (
    <>
    <div className="sub-root">
      {/* <TeamPage/> */}
      <HomePage></HomePage>
    </div>
    </>
  )
}

export default App
