function CourseButton({ onClick, showCourses}){
    return(
        <button onClick={onClick}>
            {showCourses ? "select courses" : "look for courses"}
        </button>
    );
}

export default CourseButton;