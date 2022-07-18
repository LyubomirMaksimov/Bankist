import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Features from "./components/Features";
import Operations from "./components/Operations";
import Testimonials from "./components/Testimonials";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Module from "./components/Module";

function App() {
  const [hidden, setHidden] = useState(true);

  const ModuleHandler = () => {
    setHidden(!hidden);
  };

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&amp;display=swap"
        rel="stylesheet"
      ></link>
      <Navbar openModal={ModuleHandler} />
      <Header />
      <Features />
      <Operations />
      <Testimonials />
      <SignUp openModal={ModuleHandler} />
      <Footer />
      <Module modalHidden={hidden} hideModal={ModuleHandler} />
      <div className={`overlay ${hidden ? "hidden" : ""}`}></div>
    </div>
  );
}

export default App;
