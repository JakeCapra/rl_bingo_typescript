import React, { useState } from 'react';
import bgvid from './components/images/dropshotbg.mp4';
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
          <video autoPlay={true} loop={true} muted={true} id="bgVid">
             <source src={bgvid} type="video/mp4" />
          </video>
          <div id="leftDiv">
              <h2>This is Rocket League Bingo!</h2>
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
 }

export default App;
