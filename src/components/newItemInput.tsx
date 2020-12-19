import React, { FunctionComponent, useState } from 'react';
import IAddedItem from './structuers/addedItem';

function NewItemInput(props: any) {
    const [input, setInput] = useState("");
    const [items, setItems] = useState<IAddedItem[]>([]);

    const handleChage = (e: any) => {
        setInput(e.target.value);
    }
    const noReload = (e: any) => {
        e.preventDefault();
    }
    const handleCheck = (e: any) => {
        //updates use at appropriate index on addedItems variable from app.tsx
        props.onCheck(e.target.id);
    }
    
    const onSubmit = (e: any) => {
        e.preventDefault();
        setItems([...items, {value: input, use: false, id: items.length}])
        props.onAdd({value: input, use: false, id: items.length});
    }
    
    return (
        <div>
            <form onSubmit={noReload}>
                <input id="inputBox" type="text" placeholder="Enter a bingo tile" onChange={handleChage} />
            </form>
            <button onClick={onSubmit}>Enter</button>
            <div id="customInputDiv">
                {items.map(item => 
                                    <label className="customInput" htmlFor={item.id.toString()}>{item.value}
                                    <input type="checkbox" id={item.id.toString()} onClick={handleCheck} />
                                    <span className="checkmark"></span>
                                    <hr />
                                    </label>
                                    )}
            </div>
        </div>
    )
}

export default NewItemInput;