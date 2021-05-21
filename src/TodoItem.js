import React from "react";
import ReactDom from "react-dom"

function TodoItem(props) {

    const markASChecked = {
        fontStyle: "italic",
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }

    return (
        <div>
            <div className="todo-list">
                <input type="checkbox" checked={props.item.completed}
                       onChange={(event) => props.handleChange(props.item.id)}/>
                <p style={props.item.completed ? markASChecked : null}>{props.item.text}</p>
            </div>
        </div>
    )
}

export default TodoItem