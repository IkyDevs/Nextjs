'use client';

import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addTodo() {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  }

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className='flex justify-center items-center h-screen flex-col space-y-5'>
      <h1 className='text-4xl font-bold'>Todo App</h1>

      {/* Input Form */}
      <div >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Tambah todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Tambah</button>
      </div>

      {/* List Todo */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px 0',
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black'
            }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              style={{ marginRight: '10px' }}
            />
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ marginLeft: 'auto', color: 'red' }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>

      {/* Summary */}
      <p>
        Total: {todos.length} |
        Selesai: {todos.filter(t => t.completed).length} |
        Belum: {todos.filter(t => !t.completed).length}
      </p>
    </div>
  );
}
