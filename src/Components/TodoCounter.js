import React from 'react';
import '../CSS/TodoCounter.css';
import { TodoContext } from '../TodoContext';


function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  } = 
  React.useContext(TodoContext);
  
    return (
    completedTodos === totalTodos ?
    <h1 className='todo-counter--completed'>Todo <span>COMPLETADO</span> </h1>
    :
    <h1 className='todo-counter'>
      Has completado <span className='first'>{completedTodos}</span> de <span className='second'>{totalTodos}</span> TO DOS
    </h1>
    ) ;
}

export { TodoCounter };