import Course from "./Course";

function Courses({ courses, removeCourse }) {
  return (
    <div className="body">
      <div>
        <h2 className="title">Courses</h2>
      </div>
      <div className="cardList">
        {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
