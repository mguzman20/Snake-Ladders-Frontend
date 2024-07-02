import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AboutUS from './pages/AboutUs'
import Instructions from './pages/Instructions'
import Home from './pages/Home'
import Game from './pages/Game'
import Register from './pages/Register'
import Login from './pages/Login'
import UserCheck from './protected/UserCheck'
import Profile from './components/Profile'
import EnterRoom from './pages/EnterRoom'
import WaitingRoom from './pages/WaitingRoom'



function Routing(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}/>
        <Route path={"/about_us"} element={<AboutUS />}/>
        <Route path={"/instructions"} element={<Instructions />}/>
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/game/:gameId"} element={<Game />}/>
        <Route path={"/register"} element={<Register />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/userCheck"} element={<UserCheck />}/>
        <Route path={"/profile"} element={<Profile />}/>
        <Route path={"/enterRoom"} element={<EnterRoom />}/>
        <Route path={"/waitingRoom/:gameId"} element={<WaitingRoom />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Routing;