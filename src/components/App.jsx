import React from 'react';
import Dropdown from "./Dropdown";
import Chart from './Chart';

export default function App() {
    
    const [IDS, setIDS] = React.useState('');   // Using a state as the movie's ID that will be passed to the API
    const [canvasVisible, setCanvasVisibility] = React.useState(false);     // The state that controls whether the canvas appears or not

    return (
    <div id='container'>
        <div id='left'><Dropdown setIDS={setIDS} setCanvasVisibility={setCanvasVisibility} canvasVisible={canvasVisible} /></div>   {/* Calling the "Dropdown" component */}
        {canvasVisible && <div id='canvas-container'><canvas id='right'><Chart IDS={IDS} /></canvas></div>}     {/* Showing the "Chart" component if its visibility is set to "true" */}
    </div>
  )
};
