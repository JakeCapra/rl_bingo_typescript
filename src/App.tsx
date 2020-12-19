import React from 'react';
//import bgvid from './components/images/bgvideo.mp4';
import picture from './components/images/bg.png';
import './App.css';
import Table from './components/table'

function App() {
  return (
    <div>
        {/* <img src={picture} id="backgroundImage"/> */}
        {/* <video autoPlay={true} loop={true} muted={true} id="bgVid">
            <source src={bgvid} type="video/mp4" />
        </video> */}
        <Table />

    </div>
  );
}

// for image (if in use)
const bgStyle = {
  minHeight: "100%",
  minWidth: "1024px",
  width: "100%",
  heigth: "auto",
  //position: "fixed",
  top: "0",
  left: "0",
  zIndex: "-2"
}

export default App;
