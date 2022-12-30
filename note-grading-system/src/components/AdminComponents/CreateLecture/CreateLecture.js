import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './CreateLecture.css'

const CreateLecture = (props) => {
    return(
        <div className="card form-group">
            <h2>Create Lecture</h2>
            <hr/>
            <form>
                <div className="row mb-3">
                    <label className="col">Lecture Name:</label>
                    <input className="col form-control" type="text" name="LectureName" required/>
                </div>

                <div className="row mb-3">
                    <label className="col">Lecture Code:</label>
                    <input className="col form-control" name="LectureCode" required/>
                </div>

                <div className="row mb-3">
                    <label className="col">Lecturer:</label>
                    <select placeholder="Select Lecturer" className="col form-select" name="Lecturer" required/>
                    {
                        props.lecturers.map(lecturer => {
                            return(
                                <option value={lecturer.id}>{lecturer.name}</option>
                            )
                        })
                    }
                </div>

                <button className="btn btn-success">Create</button>
            </form>
        </div>
    );
}

export default CreateLecture;