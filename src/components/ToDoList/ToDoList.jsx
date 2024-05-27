import { useEffect } from "react"
import ToDoItem from "../ToDoItem/ToDoItem"
import { useState } from "react"

const ToDoList = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        // get api to get data
        fetch("http://localhost:8000/todos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // when rest api success, save the response to the local state
                setTodos(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                }
            });
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                        <ul id="todo-list">
                            {todos.map((todo) => (
                                <>
                                    <ToDoItem key={todo.id} todo={todo} />
                                    <hr />
                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList