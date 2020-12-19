import React, { FunctionComponent } from 'react';
import IItem from './structuers/tileItem';

function reset(gameBoard: IItem[][] | undefined) {
    if (!gameBoard) {
        return;
    }
    for (var i=0; i<5; i++) {
        for (var j=0; j<5; j++) {
            gameBoard[i][j].marked = false;
            var id = "" + i + j;
            var tmp = document.getElementById(id);
            if (tmp) {
                tmp.style.backgroundColor = "red";
            }
        }
    }
    return;
}


export default reset;