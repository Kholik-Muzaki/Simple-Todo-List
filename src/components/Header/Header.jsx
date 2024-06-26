import './Header.css';
import { useState } from 'react';

const Header = () => {
    const [title, setTitle] = useState("");

    const addTodo = () => {
        const newTodo = { title, done: false };

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
            setTitle("");
            console.log("todo added");
        });
    };

    return (
        <>
            <div className="container-fluid container-header text-center">
                <div className="row mb-2">
                    <div className="col">
                        <h2 className='text-light'> ToDo List</h2><hr />
                        <p className='text-warning fw-medium'>
                            Sederhanakan rutinitas harian Anda dan raih produktivitas maksimal dengan aplikasi to-do list terbaik. <br />
                            Buat daftar tugas, tetapkan prioritas, dan lacak kemajuan Anda dengan mudah.
                        </p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-8">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tambahkan rutinitas anda  disini..."
                                aria-label="Recipient's username"
                                aria-describedby="button-addon2"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <button
                                className="btn btn-outline-warning"
                                type="button"
                                id="button-addon2"
                                onClick={addTodo}
                            >
                                Button
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
