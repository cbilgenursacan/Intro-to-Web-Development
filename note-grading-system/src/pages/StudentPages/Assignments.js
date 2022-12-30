import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { IoIosPaper } from "react-icons/io";
import "./css/Assignments.css";
import axios from "axios";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const getAssignments = async () => {
  const user = localStorage.getItem("userId");

    await axios
      .post("http://localhost:3001/getStudentAssignments", { _id: user })
      .then((res) => {
        if (res.data.length > 0) setAssignments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  const inspectAssignment = (assignment) => {
    navigate(`/assignments/${assignment._id}`, {state: {
        _id: assignment._id,
        title: assignment.title,
        description: assignment.description,
        dueDate: assignment.dueDate,
        lecture: assignment.lecture,
    }});
  }

  useEffect(() => {
    getAssignments();
  }, []);

  return (
    <div className="assignments">
      {assignments.length > 0 ? 
      <div>
        <label>
          <input
            type="search"
            className=""
            placeholder="Search for assignments..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
        : 
        <></>
      }

      <div>
        {assignments.length > 0 ? (
          assignments
            .filter((assignment) => assignment.title.toLowerCase().includes(query.toLowerCase()))
            .map((assignment) => (
              <div className="card assignment-card">
                <IoIosPaper></IoIosPaper>
                <h2>{assignment.title}</h2>
                <hr />
                <h3>{assignment.lecture}</h3>
                <h4>{assignment.deadline}</h4>
                <button className="btn btn-outline-info" onClick={() => inspectAssignment(assignment)}>Inspect</button>
              </div>
            ))
        ) : (
          <h3>No assignments found for now!</h3>
        )}
      </div>
    </div>
  );
};

export default Assignments;
