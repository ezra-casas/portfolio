import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Divider from "./components/Divider/Divider";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Hero />
      <Divider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
