import './App.css'

import Blog from './Components/Blog/Blog.jsx'
// import TemplatePage from './Components/TemplatePage/TemplatePage.jsx';
 import Whyjoin from './Components/Whyjoin/whyjoin.jsx';
import TeamPage from "./Components/TeamPage/TeamPage.jsx"
import TemplatePage2 from './Components/TemplatePage/TemplatePage.jsx'
import Template from './Dump/template.jsx'

import HomePage from './Components/HomePage/HomePage.jsx';



function App() {
  return (
    <>

      <div className="sub-root">
        {/* <FullPageScroll /> */}
        {/* <HomePage /> */}
        <TeamPage />
         
        {/* <Blog/> */}
      </div>

    </>
  )
}

export default App
