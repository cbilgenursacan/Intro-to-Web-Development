import React, { useEffect, useState } from "react";
import './css/CreateAssignment.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";

const CreateAssignment = () => {
    const [lecturers, setLecturers] = useState();
    const getLecturers = async () => {
        await axios.get("http://localhost:3001/getAllUsers").then((res) => {
            const experts = res.data.filter(user => user.userType === 2);
            setLecturers(experts);
            console.log(experts);
        });
    }
    useEffect(() => {
        getLecturers();
    }, []);

    return(
        <div className="create-assignment">
            <h1>Create an Assignment</h1>
            <div className="card">
                <form >
                    <div className="form-group row mb-3">
                        <label className="col">Lecture:</label>
                        <select className="col form-select" type="text"/>
                    </div>

                    <div className="form-group row mb-3">
                        <label className="col">Title:</label>
                        <input className="col form-control" type="text"/>
                    </div>

                    <div className="form-group row mb-3">
                        <label className="col">Description:</label>
                        <input className="col form-control" type="text"/>
                    </div>

                    <div className="form-group row mb-3">
                        <label className="col">Deadline:</label>
                        <input className="col form-control" type="datetime-local"/>
                    </div>

                    <div className="form-group row mb-3">
                        <label className="col">Content:</label>
                        <input className="col form-control" type="file"/>
                    </div>

                    <button className="btn btn-info">Share</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAssignment;