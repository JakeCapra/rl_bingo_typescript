import React, { useEffect, useState } from 'react';
import IItem from './structuers/tileItem';
import IAddedItem from './structuers/addedItem';
import loadTiles from './loadTiles';
import GameBoard from './gameBoard';
import reset from './reset';

function Table() {
    const [items, setItems] = useState<IItem[][]>();
    const [addedItems, setAddedItems] = useState<IAddedItem[]>() //user added items
    
    const loadItems = () => {
        //loads tiles into items
        setItems(loadTiles(addedItems))
    }
    const testFunc = () => {
        //console.log(items);
    }

    return (
        <div>
            <button onClick={loadItems}>Create Board</button>
            <button onClick={testFunc}>TEST BUTTON</button>
            <button onClick={() => reset(items)}>Reset</button>
            <GameBoard boardTiles={items}/>
        </div>
    )
}


export default Table