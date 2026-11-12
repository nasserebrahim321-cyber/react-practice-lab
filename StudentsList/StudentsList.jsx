
function StudentList() {
    const students = ['Fares', 'Hasan', 'Hussain', 'Amal', 'Aya', 'Hajar', 'Nawraa', 'Khadija', 'Zaid']

    return (
        <>
            <ul>
                {students.map((std) => std !== 'Zaid' ? <li>{std}</li> : null)}
            </ul>
        </>
    )
}

export default StudentList;