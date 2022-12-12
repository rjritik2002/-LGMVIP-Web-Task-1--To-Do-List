import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';


const ListComp = (props) => {

    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
    return (
        <>
            <div className="todo_style">
                <span className="delete_btn" onClick={cutIt}><DeleteIcon /></span>
                <li style={{ textDecoration: line ? "line-through" : "line" }}>{props.text}</li>
            </div>
        </>
    )
}

export default ListComp;