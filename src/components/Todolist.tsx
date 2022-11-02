import React from "react";
import { Todo } from "../interfaces"
import Todotable from "./Todotable";

function Todolist() {
    const [todo, setTodo] = React.useState<Todo>({} as Todo);
    const [todos, setTodos] = React.useState<Array<Todo>>([]);
    const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }
    const addTodo = (event: React.FormEvent<HTMLInputElement>) => {
        setTodos([...todos, todo]);
    }
    const deleteTodo = (index: number) => {
        const newtodos = todos.filter((todo, i) => i !== index);
        setTodos(newtodos);
    }

    return (
        <div>
            <input type="text" onChange={inputChanged} placeholder="description" name="description" value={todo.description} />
            <input type="date" onChange={inputChanged} placeholder="date" name="date" value={todo.date} />
            <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
            <input type="button" onClick={addTodo} value="add" />
            <Todotable todos={todos} deletetodo={deleteTodo} />
        </div>

    );
}
export default Todolist;