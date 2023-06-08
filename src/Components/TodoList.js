import '../CSS/TodoList.css'

function TodoList(props){
    return (
     <ul className = "todo-List">
        {props.children}
     </ul>
    ) ;
}

export {TodoList};