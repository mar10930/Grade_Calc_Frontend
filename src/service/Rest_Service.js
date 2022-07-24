const student_service_url = 'http://localhost:8080/';

export async function get_students()
{
    const response = await fetch('/students');
    return await response.json();
}


export async function create_student(student_obj)
{
    const response = await fetch('/save', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(student_obj),
    })

    return await response.json();
}

