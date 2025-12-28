import { useEffect, useState } from "react";
import api from "../services/api";

function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    api.get("/courses").then((res) => setCourses(res.data));
  }, []);

  const takeCourse = (title) => {
    alert(`You have successfully enrolled in "${title}"`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Courses</h2>

      {courses.map((course, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{course.title}</h3>

          <button onClick={() => takeCourse(course.title)}>
            Take Course
          </button>
        </div>
      ))}
    </div>
  );
}

export default Courses;
