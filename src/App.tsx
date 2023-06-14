import React, { useState, useEffect, CSSProperties } from 'react';
import './App.css'

function App() {

  const handleClick = () => {
    const element = document.getElementById('target')!;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navbarStyle: CSSProperties = {
    position: 'fixed',
    top: showNavbar ? '0' : '-50px',
    width: '100%',
    height: '50px',
    backgroundColor: '#f2f2f2',
    transition: 'top 0.3s',
  };

  return (
    <>
      <h1>Zachary Jorgensen</h1>
      <h4>React Web Developer</h4>
      <p>Welcome to my portfolio</p>

      <h3>About Me</h3>
      <div style={navbarStyle} id="navbar">
        hello
      </div>
      <button className="btn btn-info" onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
