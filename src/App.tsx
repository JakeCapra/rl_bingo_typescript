import React, { useState } from 'react';
//import bgvid from './components/images/bgvideo.mp4';
import picture from './components/images/bg.png';
import './App.css';
import IItem from './components/structuers/tileItem';
import IAddedItem from './components/structuers/addedItem';
import loadTiles from './components/loadTiles';
import GameBoard from './components/gameBoard';
import reset from './components/reset';
import NewItemInput, { getAddedItems } from './components/newItemInput';

function App() {
  const [items, setItems] = useState<IItem[][]>();
    const [addedItems, setAddedItems] = useState<IAddedItem[]>() //user added items
    
    const loadItems = () => {
        // I know there is a better way to do this, but idc
        setAddedItems(getAddedItems);
        //loads tiles into items
        setItems(loadTiles(addedItems))
    }
    const testFunc = () => {
        //console.log(items);
    }

    return (
        <div>
          <div id="leftDiv">
              <button onClick={loadItems}>Create Board</button>
              {/* <button onClick={testFunc}>TEST BUTTON</button> */}
              <button onClick={() => reset(items)}>Reset</button>
              <NewItemInput />
          </div>
          <div id="rightDiv">
            <GameBoard boardTiles={items}/>
          </div>
       </div>
    )
 
 
 
 
 
  // return (
  //   <div>
  //       {/* <img src={picture} id="backgroundImage"/> */}
  //       {/* <video autoPlay={true} loop={true} muted={true} id="bgVid">
  //           <source src={bgvid} type="video/mp4" />
  //       </video> */}
  //       <Table />

  //   </div>
  // );
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
