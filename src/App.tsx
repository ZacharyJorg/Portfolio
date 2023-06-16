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
      <Navbar />
    </>
  )
}

export default App
