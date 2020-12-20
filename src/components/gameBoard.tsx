import React, { FunctionComponent, useState } from 'react';
import IItems from './structuers/tileItem';
import checkWin from './checkWin';
import WinScreen from './winScreen';

const GameBoard: FunctionComponent<{boardTiles: IItems[][] | undefined}> = ({boardTiles}) => {
    const [showWin, setShowWin] = useState(false);

    if (!boardTiles) {
        return <div></div>
    }

    const togglePopup = () => {
        setShowWin(!showWin);
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
        if (win) {
            togglePopup();
        }

        return;
    }

    return (
        <div>
        <table cellSpacing="0" cellPadding="0">
            <tbody>
                {boardTiles.map(row => <tr className="row">{row.map(cell => <th id={"" + cell.colIndex + cell.rowIndex} className="boardItem" style={{backgroundColor: 'red'}} onClick={(e) => handleClick(e)}>{cell.value}</th>)}</tr>)}
            </tbody>
        </table>
        {showWin ?  
            < WinScreen text='Click "Close Button" to hide popup' closePopup={togglePopup} />  
            : null}
    </div>

    )

}

export default GameBoard;