import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim() === '') return
        setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }])
        setInputValue('')
    }
    
    const toggleCompleted = (id) => {
        setTodos(todos.map(item => item.id === id ? {...item, completed: !item.completed} : item))
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }

    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit} className="add-todo">
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={e => setInputValue(e.target.value)} 
                    placeholder="Enter a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map(item => (
                    <li key={item.id} className="todo-item">
                        <input 
                            type="checkbox" 
                            checked={item.completed} 
                            onChange={() => toggleCompleted(item.id)} 
                        />
                        <span className="text" style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                            {item.text}
                        </span>
                        <button className="delete-btn" onClick={() => deleteTodo(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList