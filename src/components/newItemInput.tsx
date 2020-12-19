import React, { FunctionComponent, useState } from 'react';
import IAddedItem from './structuers/addedItem';

// probably should use a store, but oh well, i suck
var userAddedItems: IAddedItem[] = [];

const NewItemInput: FunctionComponent = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState<IAddedItem[]>([]);

    const handleChage = (e: any) => {
        setInput(e.target.value);
    }
    const noReload = (e: any) => {
        e.preventDefault();
    }
    
    const onSubmit = (e: any) => {
        e.preventDefault();
        setItems([...items, {value: input, use: false, id: items.length}]);
        userAddedItems = items;
    }
    
    return (
        <div>
            <form onSubmit={noReload}>
                <input id="inputBox" type="text" placeholder="Enter a bingo tile" onChange={handleChage} />
            </form>
            <button onClick={onSubmit}>Enter</button>
            <div>
                {items.map(item => 
                                    <label className="customInput" htmlFor={item.id.toString()}>{item.value}
                                    <input type="checkbox" id={item.id.toString()} onClick={(e) => {item.use=!item.use}} />
                                    <span className="checkmark"></span>
                                    <hr />
                                    </label>
                                    )}
            </div>
        </div>
    )
}

export function getAddedItems() {
    console.log(userAddedItems)
    return userAddedItems;
}


export default NewItemInput;