export const studentCheck = async (student, PATH, TOKEN, AUTH) => {
    return await fetch((`${PATH}/students-by?phoneNumber=${encodeURIComponent(student.phoneNumber)}`), {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    });
}