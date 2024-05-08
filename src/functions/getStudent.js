export const getStudent = (PATH, TOKEN, AUTH, id) => {
    return fetch((`${PATH}/students/${id}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}