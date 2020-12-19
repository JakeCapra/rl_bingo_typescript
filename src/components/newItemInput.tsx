import React, { FunctionComponent } from 'react';
import IAddedItems from './structuers/addedItem';


function newItemInput() {
    
    const noReload = (e: any) => {
        e.preventDefault();
    }
    
    // const onSubmit = (e: any) => {
    //     e.preventDefault();
    //     var input = document.getElementById("inputBox").value;
    //     this.state.addedTiles.push({title: input, use: false});
    //     this.useAdded = true;
    //     this.forceUpdate();
    // }
    
    return (
    <div>
        <form onSubmit={noReload}>
            <input id="inputBox" type="text" placeholder="Enter a bingo tile" />
        </form>
    </div>)
}

export default newItemInput;