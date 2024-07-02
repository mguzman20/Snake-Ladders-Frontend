
import Navbar from './components/NavBar'
import './App.css'
import { createContext, useState } from "react";

export const UserContext = createContext();


function App() {
  const [user, setUser] = useState({ loggedIn: false });
  return (
    <>
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <h1>Serpientes y Escaleras</h1>
      <h2>¡Lleva la emoción de las serpientes y escaleras a cualquier lugar con nuestro juego en línea!</h2>
      <img src="/imgs/app_picture.png" className="app_picture" />
      <h2>Lanza los dados y avanza hacia la cima, pero cuidado con las serpientes</h2>
      {/* <a href='/userCheck'>Chequeo Scope User</a> */}
      </UserContext.Provider>
    </>
  )
}

export default App
