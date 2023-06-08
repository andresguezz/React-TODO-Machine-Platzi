import '../CSS/CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){
    return(
        <button className='create-todo-button'
        onClick={
            // (event)=> {
            //     console.log(event)
            //     console.log(event.target)
            //     console.log('testeo')}
            () => { 
                setOpenModal(state =>!state);
            }
        }
        >+</button>
    )
}

export {CreateTodoButton}