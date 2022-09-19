/* 
import ToDoList from './ToDoList'
const [todos,_] = useState([])

<ToDoList>
      <h1>sdsdds</h1>
      <div>
      {(todos) => todos.length > 0 ? todos : <span>No todos =(</span>}
      </div>
</ToDoList> */

const ToDoList = ({ ...children }) => {
  return <div>{children}</div>
}

export default ToDoList
