import React from "react";
import { useState } from "react";
import "./Lectures.css";
import "bootstrap/dist/css/bootstrap.css";

const Lectures = (props) => {
  const [query, setQuery] = useState("");

  return (
    <div className="lectures">
      <h2>Current Lectures</h2>
      <hr/>
      <div className="pb-3">
        <label>
          <input
            type="search"
            className=""
            placeholder="Search for lectures..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
    {props.lectures.length > 0 ? 
        props.lectures
            .filter((lecture) => lecture.lectureName.toLowerCase().includes(query.toLowerCase()))
            .map((lecture) => (
                <div className="lecture">
                    <h3>{lecture.lectureName}</h3>
                    <hr />
                    <h4>{lecture.lectureCode}</h4>
                    <h4 className="mb-3">{lecture.lecturer}</h4>
                    <button className="btn btn-danger">Delete</button>
                </div>
            ))
        :
        <></>
    }
    </div>
  );
};

export default Lectures;
