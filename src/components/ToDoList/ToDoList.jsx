import { useEffect, useState } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
// import './ToDoList.css'; // Assuming you have a CSS file for ToDoList styles

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch API to get data
        fetch("http://localhost:8000/todos")
            .then((res) => res.json())
            .then((data) => {
                // When REST API is successful, save the response to the local state
                setTodos(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted");
                } else {
                    console.error("Fetch error: ", err);
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
                                <div key={todo.id}>
                                    <ToDoItem todo={todo} />
                                    <hr />
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToDoList;
