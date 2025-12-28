function CourseCard({ course }) {
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <button>Enroll</button>
    </div>
  );
}

export default CourseCard;
