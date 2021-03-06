// import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem'
import todoData from "./todoData";
import AddTodo from "./AddTodo";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor() {

        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed};
                }
                return todo;
            });
            return {
                todos: updatedTodos
            };
        });
    }

    render() {
        const responseData = this.state.todos.map(item => <TodoItem item={item} handleChange={this.handleChange}/>)

        return (
            <div className="todo-list">
                <AddTodo/>
            <br />
                {responseData}
            </div>
        );
    }
}

export default App;
