import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    const{item: todos,
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('CIRNO_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const [openModal, setOpenModal] = React.useState(false);



  const searchedTodos = todos.filter(
    (todo) => {
      
      const removeDiacritics = (str) =>  {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
      const todoText = removeDiacritics(todo.text).toLowerCase();
      const todoFind = removeDiacritics(searchValue).toLocaleLowerCase();
    
       return todoText.includes(todoFind)
    
  }
  );

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      text,
      completed: false,
    })
    saveTodos(newTodos)
  };


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text 
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos (newTodos);
  }

  
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text 
    );
    newTodos.splice(todoIndex, 1);
    saveTodos (newTodos);
  }

    return (
        <TodoContext.Provider value={
            {
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            setOpenModal,
            openModal,
            addTodo,
            }
        }>
            {children}
        </TodoContext.Provider>
    )
}





export { TodoContext,TodoProvider};