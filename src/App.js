import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Slider";
import { useState } from "react";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="App">
      <Slider />
      <div>
      <div className={`box ${isExpanded ? 'expanded' : ''}`}></div>
      <button onClick={handleClick}>Next</button>
    </div>
    </div>
  );
}

export default App;
