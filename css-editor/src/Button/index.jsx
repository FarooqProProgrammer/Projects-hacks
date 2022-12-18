import React from 'react'
import "./index.css"
import { useState } from 'react'

const Button = () => {
    const [width,setWidth] = useState(90)
    const [height,setHeight] = useState(50)
    const [input,setInput] = useState("Text")
    const [rounded,setRounded] = useState(0)
    const [bgcolor,setBgColor] = useState("#eee")
    const [textColor,settextColor] = useState("#fff")
    // const [fontWeight,setFontWeight] = useState("20")
   
  return (
    <div style={{display:"flex",width:"100vw"}}>
        {/* <Editor/> */}
        <div className="controls">

            <label>Text</label>
            <input type="text" onChange={(e)=> setInput(e.target.value)}/>


            <label>Width</label>
            <input type="range" value={width} max={200} onChange={(e)=> setWidth(e.target.value)} />

            <label>Height</label>
            <input type="range" value={height} max={200} onChange={(e)=> setHeight(e.target.value)} />


            <label>Rounded</label>
            <input type="range" value={rounded} max={200} onChange={(e)=> setRounded(e.target.value)} />


            <label>Background Color</label>
            <input type="color" value={bgcolor} max={200} onChange={(e)=> setBgColor(e.target.value)} />

            <label>Text Color</label>
            <input type="color" value={rounded} max={200} onChange={(e)=> settextColor(e.target.value)} />

            {/* <label>Font Weight</label>
            <input type="range" value={fontWeight} max={200} onChange={(e)=> setFontWeight(e.target.value)} /> */}

        </div>
        <div className="btns">
    
            <button
                style={
                    {
                        width:`${width}px`,
                        height:`${height}px`,
                        borderRadius:`${rounded}px`,
                        color:`${textColor}`,
                        backgroundColor:`${bgcolor}`,
                        // fontWeight:`${fontWeight}px`
                    }
            }
            >
                {input}
            </button>

            <div className="styles">
                <p>width:{width}px;</p>
                <p>height:{height}px;</p>
                <p>border-radius:{rounded}px;</p>
                <p>color:{textColor}</p>
                <p>background-color:{bgcolor};</p>

            </div>

        </div>
    </div>
  )
}

export default Button