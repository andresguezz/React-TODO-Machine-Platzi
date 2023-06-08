import React from "react";
import {TodoContext } from '../TodoContext/index';
import '../CSS/TodoForm.css';


function TodoForm (){
    const {
    addTodo,
    setOpenModal,

    } = React.useContext (TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onCancel = () => {

        setOpenModal(false);
    };

    return(
    <form className="TodoForm" onSubmit={onSubmit}>
        <div className="TodoForm--header">
        <label>Nuevo TODO</label>
        </div>
        <div className="TodoForm--content">
        <textarea
        placeholder="Escribe tu TODO..."
        value={newTodoValue}
        onChange={onChange}
        />
        </div>
        <div className="TodoForm--buttonContainer">
        <button className="TodoForm-button TodoForm-button--add" >Crear</button>
        <button className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
        </div>
    </form>
    )
}

export {TodoForm};