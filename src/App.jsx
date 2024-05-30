
import './App.css'
import { Navbar } from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import {MyFooter} from './components/MyFooter'
import Project from './Project'
import AchievementPage from './Achievements'
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <BrowserRouter>
     <Routes>
      <Route  path='/' element={<Home/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
      <Route path='/achievement' element={<AchievementPage/>}></Route>
     </Routes>
     </BrowserRouter>
      
    <MyFooter/>
    </>
  )
}

export default App
