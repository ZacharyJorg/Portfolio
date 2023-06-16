import React, {useState, useEffect} from "react"


export function Navbar(){
    const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

  }, []);

  return (
   <>
        <div style={{position: 'fixed',
    top: showNavbar ? '0' : '-50px',
    left: '0',
    right: '0',
    width: '100%',
    height: '50px',
    backgroundColor: '#f2f2f2',
    transition: 'top 0.3s'}} id="navbar">
        <button>
            About Me
        </button>
        <button>
            Projects
        </button>
        <button>
            Contact Me
        </button>
        </div>
   </>
  )
}

