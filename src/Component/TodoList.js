import './TodoList.css'
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const TodoList = ({ listTodo, handleDelete, handleToggle }) => {
  const handleTaskClick = () => {
    // console.log('click')
  }
  return (
    <ul className='list'>

      {listTodo.map((task) => (
        <li key={task}
          onClick={() => handleTaskClick(task)}>
          <input type='checkbox' />

          {task}
          <span className='activity'>

            <DeleteForeverIcon onClick={() => handleDelete(task)} />

          </span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList

