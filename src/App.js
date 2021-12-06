import "./App.css";
import Card from "./components/cards/Card";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import './App.css';
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const onMouseClick =()=>{
    setIsVisible(!isVisible)
  }
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card isVisible={isVisible} onMouseClick={onMouseClick}  />
    </div>
  );
}

export default App;
