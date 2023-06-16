import React from "react"
import './App.css'
import {Navbar} from './components/Navbar'

function App() {

  const handleClick = () => {
    const element = document.getElementById('target')!;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
    <div className="introduction">
      <h1>Zachary Jorgensen</h1>
      <h4>React Web Developer</h4>
      <p>Welcome to my portfolio</p>
      </div>

      <button>Get Started</button>

      <div className="biography">
      <p className="aboutMe">Hello, I'm Zachary Jorgensen, I'm a self-taught web developer. I've become extremely dedicated and completely captured by the entire process of self-taught programming. With a background of DIY and artistry, programming has been able to entertain my creativity as well as my problem solving skills. The skills i've culmenated have shaped me into a well rounded developer ready to start my journey with the industry.</p>
      </div>
      
      <Navbar />
    </>
  )
}

export default App
