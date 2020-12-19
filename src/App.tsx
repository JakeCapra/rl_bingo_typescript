import React, { useState } from 'react';
//import bgvid from './components/images/bgvideo.mp4';
import picture from './components/images/bg.png';
import './App.css';
import IItem from './components/structuers/tileItem';
import IAddedItem from './components/structuers/addedItem';
import loadTiles from './components/loadTiles';
import GameBoard from './components/gameBoard';
import reset from './components/reset';
import NewItemInput from './components/newItemInput';
import About from './components/about';
import RankSelector from './components/RankSelector'

function App() {
  const [items, setItems] = useState<IItem[][]>();
  const [addedItems, setAddedItems] = useState<IAddedItem[]>([]);//user added items
  const [rankSelected, setRankSelected] = useState(0);
    
    const loadItems = () => {
        //loads tiles into items
        setItems(loadTiles(addedItems, rankSelected))
    }
    const testFunc = () => {
        console.log(addedItems);
    }
    function handleAdded(newValue: IAddedItem) {
        // gets called when user adds a new tile
        setAddedItems([...addedItems, newValue])
    }
    function handleChecked(id: any) {
        // gets called from newUserInput.tsx when checkbox is clicked
        addedItems[id].use = !addedItems[id].use
        setAddedItems(addedItems);
    }
    function handleRankChange(value: number) {
        setRankSelected(value);
    }



    return (
        <div>
          <div id="leftDiv">
              <button onClick={loadItems}>Create Board</button>
              <button onClick={() => reset(items)}>Reset</button>
              <RankSelector onRankSelected={handleRankChange}/>
              {/* <button onClick={testFunc}>TEST BUTTON</button> */}
              <NewItemInput onAdd={handleAdded} onCheck={handleChecked}/>
              <About />
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
