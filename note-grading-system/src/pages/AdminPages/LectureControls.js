import React, { useEffect, useState } from "react";
import CreateLecture from "../../components/AdminComponents/CreateLecture/CreateLecture";
import Lectures from "../../components/AdminComponents/Lectures/Lectures";
import "./css/LectureControls.css";
import axios from "axios";

const LectureControls = () => {
  const [lectures, setLectures] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  
  const getDatas = async () => {
    await axios.get("http://localhost:3001/getAllLectures").then((res) => {
      setLectures(res.data);
    });

    await axios.get("http://localhost:3001/getAllLecturers").then((res) => {
      setLecturers(res.data);
    });
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="lecture-controls">
      <h1>Lecture Controls</h1>
      <div>
        <CreateLecture lecturers={lecturers} />
        <Lectures lectures={lectures} />
      </div>
    </div>
  );
};

export default LectureControls;
