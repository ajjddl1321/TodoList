import React, { useState } from "react";
import AddTodo from "./AddTodo/AddTodo";
import Todo from "./Todo/Todo";

export default function AppTodo({filter})
{
    const [todo, setTodo] = useState([
        { id : '123', text : '운동하기', status : 'active' },
        { id : '1234', text : '공부하기', status : 'active' }
    ]);

    const handleAdd = (todos) => setTodo([...todo, todos]);
    const handleUpdate = (updated) => 
        setTodo(todo.map((todos) => (todos.id === updated.id ? updated: todos)));
    const handleDelete = (deleted) => 
        setTodo(todo.filter((todos) => (todos.id !== deleted.id)));
    
    const filterd = getFilterdItem(todo, filter);

    return(
        <section>
        <ul>
            {filterd.map((item) => 
                (<Todo key = {item.id} todos = {item} onUpdate = {handleUpdate} onDelete = {handleDelete}  />
            ))}
        </ul>
        <AddTodo onAdd = {handleAdd} />
        </section>
    )
}

function getFilterdItem(todo, filter)
{
    if(filter === 'all')
    {
        return todo;
    }
    return todo.filter((todos) => todos.status === filter);
}
