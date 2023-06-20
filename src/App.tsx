import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
  const handleClick = () => {
    const element = document.getElementById("target")!;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-3 mt-5">
            <h1>Zachary Jorgensen</h1>
            <h5 className="fs-6">React Web Developer</h5>
            <p className="">Welcome to my portfolio</p>
          </div>
        </div>
      </div>

      <div className="row custom-gap text-center">
        <p className="aboutMe fs-5 col-12 col-sm-6 border border-primary">
          Hello, I'm Zachary Jorgensen, I'm a self-taught web developer. I've
          become extremely dedicated and completely captured by the entire
          process of self-taught programming. With a background of DIY and
          artistry, programming has been able to entertain my creativity as well
          as my problem solving skills. The skills i've culmenated have shaped
          me into a well rounded developer ready to start my journey with the
          industry and continue to pursue personal and career growth.
        </p>
        <ul className="border border-primary col-sm-6 list-group">
          <h2>SKILLS</h2>
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">Javascript</li>
          <li className="list-group-item">React</li>
          <li className="list-group-item">Bootstrap</li>
          <li className="list-group-item">Git</li>
          <li className="list-group-item">Chrome DevTools</li>
          <li className="list-group-item">UX/UI Desgin</li>
        </ul>
      </div>

      <Projects />
      <Navbar />
    </>
  );
}

export default App;
