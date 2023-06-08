import React from 'react';
import '../CSS/TodoSearch.css';
import { TodoContext } from '../TodoContext';


function TodoSearch(){

    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);

    return (
        <input 
        className="todo-search" 
        placeholder ="Buscar Tarea... "
        value={searchValue}
        onChange={(event)=>{
            setSearchValue(event.target.value);
        }}
        />
    ) ;
}

export { TodoSearch}