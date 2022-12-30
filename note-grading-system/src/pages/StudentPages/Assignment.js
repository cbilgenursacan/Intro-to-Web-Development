import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./css/Assignment.css";

const Assignment = () => {
  const { state } = useLocation();
  const [assignment, setAssignment] = useState({});
  const [submission, setSubmission] = useState("");

  const uploadSubmission = async () => {
    if (submission) {
      const data = new FormData();
      let assignmentId = assignment._id;
      let studentId = localStorage.getItem("studentId");

      data.append("file", submission);
      data.append("studentId", studentId);
      data.append("assignmentId", assignmentId);
      console.log(data);

      await axios
        .post("http://localhost:3001/uploadAnswerSheet", data)
        .then((res) => console.log(res));
    }
  };

  useEffect(() => {
    setAssignment(state);
  }, []);

  return (
    <div className="assignment ">
      <h1 >Assignment Details</h1>
      <div className="card">
        <h1>{assignment.title}</h1>
        <hr />
        <p>{assignment.description}</p>
        <h3>{assignment.lecture}</h3>
        <h3 className="pb-3">{assignment.dueDate}</h3>
        <div className="pb-3">
          <h6>Upload Submission</h6>
          <input
            className=" form-control-file"
            type="file"
            onChange={(e) => setSubmission(e.target.files[0])}
          />
          <button className="btn btn-outline-info" onClick={uploadSubmission}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
