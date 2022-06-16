import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { TiEdit } from 'react-icons/ti';
import { TiTrash } from 'react-icons/ti';



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const[inputValue, setInputValue] = useState("");

  const [edit, setEdit] = useState({
    id: null,
    value: '',
    quantity: inputValue

  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      quantity: inputValue

    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text} - {todo.quantity}
      </div>
      <div className='icons'>
        <TiTrash
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text, quantity: todo.quantity })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
