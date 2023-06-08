
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext';


// localStorage.removeItem('CIRNO_v1');
// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true},
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'Llorrar con la Llorona', completed: false},
//   { text: 'Otra cosa', completed: false},
//   { text: 'Canción', completed: true},
  
// ];

// localStorage.setItem('CIRNO_V1', JSON.stringify(defaultTodos) );



 

function App() {
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  )

}





export default App;
