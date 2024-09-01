import React, { useState } from 'react'
import './App.css'
import TodoList from './Component/TodoList';


const App = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const addItem = (task) => {
        setList([...list, task]);
        setInput('');
    }
    const toggleItem = (item) => {
        const newTodolist = list.map((listItem, i) => {
            if (i === item) {
                return { ...listItem, completed: !listItem.completed };
            }
            //return listItem;
        });
        setList(newTodolist);
    };
    

    const deleteItem = (item) => {
        const newTodolist = list.filter((listItem) => listItem !== item);
        setList(newTodolist);
    };


    return (
        <div className='container'>
            <h1>ToDo App</h1>
            <input type='text'
                placeholder='add task...'
                value={input}
                onChange={e => setInput(e.target.value)} />
            <button onClick={() => addItem(input)}>Add</button>
            <TodoList
                listTodo={list}
                handleToggle={toggleItem}
                handleDelete={deleteItem}
            />
        </div>
    )
}

export default App