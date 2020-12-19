import React, { FunctionComponent } from 'react';
import IItems from './structuers/tileItem';
import checkWin from './checkWin';

const GameBoard: FunctionComponent<{boardTiles: IItems[][] | undefined}> = ({boardTiles}) => {
   
    if (!boardTiles) {
        return <div></div>
    }
    
    const handleClick = (e: any) => {
        var i = e.target.id.split("")[0];
        var j = e.target.id.split("")[1];
        boardTiles[i][j].marked = !boardTiles[i][j].marked;
        if (e.target.style.backgroundColor === "red") {
            e.target.style.backgroundColor = "green";
        }
        else {
            e.target.style.backgroundColor = "red";
        }
        var win = checkWin(boardTiles);
        // if (win) (
        //     alert("Winner")
        // )

        return;
    }




    return (
        <table>
            <tbody>
                {boardTiles.map(row => <tr className="row">{row.map(cell => <th id={"" + cell.colIndex + cell.rowIndex} className="boardItem" onClick={(e) => handleClick(e)}>{cell.value}</th>)}</tr>)}
            </tbody>
        </table>

    )

}


export default GameBoard;