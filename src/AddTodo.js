import React, {useState} from "react";
import ReactDom from "react-dom"

function AddTodo() {
    const [todo,setTodo] = useState({
        id: "",
        task: "",
        completed: false

    });

    function handleTaskTodoOnChange(e)
    {
        setTodo({...todo, task:e.target.value})
    }
    return(
        <div>
            <form>
            <label>Task: </label>
            <input type= "text" name="task" onChange={handleTaskTodoOnChange}/>
            <button type="submit">Add task</button>
            </form>
        </div>
    )
}
export default AddTodo