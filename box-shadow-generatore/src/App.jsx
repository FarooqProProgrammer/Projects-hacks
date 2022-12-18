import './App.css';
import {useState} from "react"
function App() {
  const [Hori,setHori] = useState(10);
  const [Veri,setVeri] = useState(10);
  const [Blur,setBlur] = useState(10);
  const [color,setColor] = useState("#000")

  
  return (
    <div className="App">
        <div className="controls">
          <label>Horizontal length</label>
          <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
          <label>Blur</label>
          <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
          <label>Verticall length</label>
          <input type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
          <label>Color Picker</label>
          <input type="color" min="-200" max="200" value={color} onChange={(e)=>setColor(e.target.value)} />
          
          
        </div>
        <div className="output">
          <div className="box" style={{boxShadow:`${Hori}px ${Veri}px  ${Blur}px ${color}` }}>
                <p>box - shadow:{Hori}px {Veri}px {Blur}px {color}</p>
          </div>
        </div>
    </div>
  );
}

export default App;
