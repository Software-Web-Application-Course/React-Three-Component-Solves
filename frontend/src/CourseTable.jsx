function CourseTable(){
    const courses = [
        {id: 1, code: "SE321", name: "Web Application"},
        {id: 2, code: "SE322", name: "Web Application Lab"}
    ];

    return(
        <table>
        <thead>
        <tr>
            <th>ID</th>
            <th>Code</th>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {courses.map((courses => (
            <tr key={courses.id}>
            <td>{courses.id}</td>
            <td> {courses.code} </td>
            <td> {courses.name} </td>
            </tr>
        )))}
        </tbody>
    </table>
    );
}

export default CourseTable;