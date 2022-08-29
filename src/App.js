import './App.css';
import Button from './components/Button'
import React from 'react';
import {useState, useEffect} from 'react';
import Canvas from './components/Canvas';
import { CirclePicker } from 'react-color';
import ReactDOM from 'react-dom';
import Draggable, {DraggableCore} from 'react-draggable';
import ReactSlider from "react-slider";

function App() {
  const [gui, setGui] = useState(true)
  const [backgroundEnable, setBackgroundEnable] = useState(true)
  const [xWidth, setXWidth] = useState('55')
  const [yWidth, setYWidth] = useState('55')
  const [currentValue, setCurrentValue] = useState(255);
  function createGui(){
    setGui(wasSet => !wasSet);
  }

  function changeBG(){
    setBackgroundEnable(set => !set);
  }

  function hexToRGB(hex) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + ", " + g + ", " + b + ", " + currentValue + ")";
}



  

  function reload(){
    window.location.reload(false)
  }
  const [projectColor, setProjectColor] = useState('#000000');
  const colors = [
    "#e6e6e6",
    '#000000'
  ];
  return (
    <div className="App h-screen" style={ backgroundEnable ? { backgroundImage:`url('https://i.pinimg.com/originals/b5/7b/66/b57b666c6de1778896a77e25bad990bb.jpg')`} : {}}>
      <div className="container gap-4 p-4">
          
          <Button action={createGui} text="Toggle Gui Base"/>
          <Button action={reload} text="Reset Gui Base"/>
          <Button action={changeBG} text="Toggle Background"/>
          <input value={xWidth} onChange={e => setXWidth(e.target.value)} placeholder="x-width"  className="bg-gray-200 p-2 rounded-md mx-1 border border-black text-black" />
          <input value={yWidth} onChange={f => setYWidth(f.target.value)} placeholder="y-width" className="bg-gray-200 p-2 rounded-md mx-1 border border-black text-black" />
          <span className="flex justify-start">
          <p>ignore negatives, if its negative just put it as a positive number &nbsp; &nbsp;</p>
          <p className="font-bold"> X: this.width / 2 - {xWidth} &nbsp; &nbsp;</p>
          <p className="font-bold"> Width: this.width / 2 + {xWidth}</p>
          &nbsp; &nbsp;
          &nbsp; &nbsp;
          &nbsp; &nbsp;
          <p className="font-bold"> Y: this.width / 2 - {yWidth} &nbsp; &nbsp;</p>
          <p className="font-bold"> Height: this.width / 2 + {yWidth}</p>
          </span>

          

      </div>

      <div className="p-4">
      <CirclePicker
        colors={colors}
        color={projectColor}
        onChangeComplete={(color) => setProjectColor(color.hex)}
      />
      <p>Opacity</p>
      <ReactSlider
      className="customSlider"
      thumbClassName="customSlider-thumb"
      trackClassName="customSlider-track"
      markClassName="customSlider-mark"
      marks={20}
      min={0}
      max={255}
      defaultValue={255}
      value={currentValue}
      onChange={(value) => setCurrentValue(value)}
      renderMark={(props) => {
         if (props.key < currentValue) {
           props.className = "customSlider-mark customSlider-mark-before";
         } else if (props.key === currentValue) {
           props.className = "customSlider-mark customSlider-mark-active";
         }
         return <span {...props} />;
      }}
    />

    <p className="my-4">
      
      Current Color: {hexToRGB(projectColor)}
    </p>
      </div>

      <div className="canvas flex justify-center">
        {gui && <Canvas x={xWidth * 4 +"px"} y={yWidth * 4 +"px"} color={projectColor} opacity={currentValue / 255}/>}
      </div>
      
      
    </div>
  );
}

export default App;
