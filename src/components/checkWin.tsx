import React from 'react';
import IItem from './structuers/tileItem';

function checkWin(gameBoard: IItem[][]) {
    var pass=false;
    
    //horizontal check
    for (var i=0; i<5; i++) {
        for (var j=0; j<5; j++) {
            if (gameBoard[i][j].marked) {
                pass=true;
            }
            else {
                pass=false;
                break;
            }
        }
        if (pass) {
            return pass;
        }
    }

    //vertical check
    for (i=0; i<5; i++) {
        for (j=0; j<5; j++) {
            if (gameBoard[j][i].marked) {
                pass=true;
            }
            else {
                pass=false;
                break;
            }
        }
        if (pass) {
            return pass;
        }
    }

    //diagonal check - left to right
    for (i=0; i<5; i++) {
        if (gameBoard[i][i].marked) {
            pass=true;
        }
        else {
            pass=false;
            break;
        }
    }
    if (pass) {
        return pass;
    }

    //diagonal check - right to left
    j = 4;
    for (i=0; i<5; i++) {
        if (gameBoard[i][j].marked) {
            pass=true;
            j--;
        }
        else {
            pass=false;
            break;
        }
    }
    if (pass) {
        return pass;
    }
    return false;
}


export default checkWin;
