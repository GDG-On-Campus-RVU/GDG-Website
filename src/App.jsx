import './App.css'
import FullPageScroll from "./Components/HomePage/FullPageScroll.jsx"
import HomePage from "./Components/HomePage/HomePage.jsx"
import TeamPage from "./Components/TeamPage/TeamPage.jsx"
import Blog from "./Components/Blog/Blog.jsx"

function App() {
  return (
    <>
      <div className="sub-root">
        {/* <FullPageScroll /> */}
        <HomePage />
        {/* <TeamPage /> */}
        {/* <Blog/> */}
      </div>
    </>
  )
}

export default App
