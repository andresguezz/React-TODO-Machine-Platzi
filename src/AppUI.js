import { TodoCounter } from "./Components/TodoCounter";
import { TodoSearch } from "./Components/TodoSearch";
import { TodoList } from "./Components/TodoList";
import { TodoLoading } from "./Components/TodoLoading";
import { TodoError } from "./Components/TodoError";
import { TodoEmpty } from "./Components/TodoEmpty";
import { TodoItem } from "./Components/TodoItem";
import { CreateTodoButton} from "./Components/CreateTodoButton";
import { Modal } from "./Components/TodoModal";
import { TodoForm } from "./Components/TodoForm";
import { TodoContext } from "./TodoContext/index";
import React from "react";


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
} = React.useContext(TodoContext)
return (
    <>
      <TodoCounter 
      // completed = {completedTodos} 
      // total = {totalTodos} 
      />
      <TodoSearch 
        // searchValue={searchValue}
        // setSearchValue={setSearchValue}
      />
    
    <TodoList>
      {loading && <TodoLoading />}
      {error && <TodoError/>}
      {(!loading && searchedTodos.length === 0) && <TodoEmpty/>}
                
      {searchedTodos.map(todo =>(
        <TodoItem 
          key = {todo.text} 
          text = {todo.text}
          completed = {todo.completed}
          onComplete= {() => completeTodo(todo.text)}
          onDelete= {() => deleteTodo(todo.text)}
        />
      ))}
        
    </TodoList>


    <CreateTodoButton setOpenModal={setOpenModal} /> 
    {openModal && (
          <Modal>
           <TodoForm/>
          </Modal>
    )}


    </>
  );}

  export {AppUI} ;