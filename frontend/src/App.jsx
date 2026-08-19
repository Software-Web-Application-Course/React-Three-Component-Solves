import { useState } from "react";
import CourseButton from "./CourseButton";
import CourseTable from "./CourseTable";

function App(){
  const [showCourses, setShowCourses] = useState(false);

  const handleClick = () =>{
    setShowCourses(true);
  };

  return(
    <div>
      <CourseButton onClick={handleClick} showCourses={showCourses} />
      {showCourses ? (<CourseTable />) : (<p>No Courses Available</p>)}
    </div>
  );

}

export default App;