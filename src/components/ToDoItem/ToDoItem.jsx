import './ToDoItem.css'
const ToDoItem = ({ todo }) => {
    return (
        <li className={`${todo.done ? "checked" : ""}`} id="list-group-item">
            <p>{todo.text}</p>
            <button className="btn btn-danger">Hapus</button>
        </li>
    )
}

export default ToDoItem