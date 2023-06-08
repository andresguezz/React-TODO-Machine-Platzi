import '../CSS/TodoItem.css';
import { IoIosCheckmarkCircle , IoIosCloseCircle} from 'react-icons/io';



function TodoItem(props){
    return (
      <li className="todo-item">

        <span className={`icon check-icon ${props.completed && 'check-icon--complete'}`}
        onClick={props.onComplete}
        ><IoIosCheckmarkCircle /></span>
        <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>{props.text}</p>
        <span className='icon cross-icon'
        onClick={props.onDelete}
        ><IoIosCloseCircle/></span>
  
      </li>
    ) ;
  }

export {TodoItem};