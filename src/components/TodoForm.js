import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      quantity: inputValue
    });
    setInput('');
  };

  const[inputValue, setInputValue] = useState("");


  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          {/* quantite quantity */}
          <input type="number" className="todo-input-quantity edit" min="1" max="10" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
          <input
            placeholder='Mettez à jour votre produit'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          {/* quantite quantity */}
          <input type="number" className="todo-input-quantity edit" min="1" max="10" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

          {/* ajouter objet */}
          <input
            placeholder='Ajouter au panier'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Ajouter
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
