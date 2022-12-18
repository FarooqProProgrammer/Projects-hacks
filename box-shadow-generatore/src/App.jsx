import './App.css';
import {useState} from "react"
function App() {
  const [Hori,setHori] = useState();
  return (
    <div className="App">
        <div className="controls">
          <label>Horizontal length</label>
          <input type="range" min="-200" max="200"  name="" id="" />
        </div>
        <div className="output"></div>
    </div>
  );
}

export default App;
