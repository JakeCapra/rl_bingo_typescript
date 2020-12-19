import { defaultCipherList } from 'constants';
import React from 'react';
import { GetBingoTileItems } from './BingoItemRepository';
import IAddedItem from './structuers/addedItem'
import IItem from './structuers/tileItem';

function loadTiles(addedTiles: IAddedItem[] | undefined) {
   
    // defining the array like this is the only way it works, idk why, just dont look at it
    let items: IItem[][] = [
        [{rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}],
        [{rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}],
        [{rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}],
        [{rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}],
        [{rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}, {rowIndex: 0, colIndex: 0, value: "", marked: false}],
    ]
    
    // array of strings
    var availableTiles = GetBingoTileItems(0);
    var usedIndex: number[] = [];
    var usedIndexLoad: number[] = [];
    let tileArr = []; // tiles to added to board
    
    
    // for user added tiles
    if (addedTiles) {
        for (var i=0; i<addedTiles.length; i++) {
            
            if (addedTiles[i].use) {
                tileArr.push(addedTiles[i].value);
            }
        } 
    }

    // if user added tiles have already been added to addedTiles
    var insertAmt = 24 - tileArr.length;
    for (i=0; i<insertAmt; i++) {
        do
        {
            var index = Math.floor(Math.random() * availableTiles.length);
        } while (usedIndexLoad.includes(index));
        usedIndexLoad.push(index);
        tileArr.push(availableTiles[index]);
    }

    // i is col, j is row
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (i != 2 || j != 2) {
                do
                {
                    var index = Math.floor(Math.random() * tileArr.length);
                } while (usedIndex.includes(index));
                usedIndex.push(index);
                items[i][j].value = tileArr[index];
                items[i][j].colIndex = i;
                items[i][j].rowIndex = j;
            }
        }
    }

    items[2][2].value = "Free";
    items[2][2].marked = false;
    items[2][2].colIndex = 2;
    items[2][2].rowIndex = 2;

    return items;
}


export default loadTiles;