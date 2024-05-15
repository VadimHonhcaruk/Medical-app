export const studentPOST = async (student, PATH, TOKEN, AUTH) => {
    return (await fetch((`${PATH}/students`), {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH,
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(student)
    })
    )
}