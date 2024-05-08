export const putStudent = (PATH, TOKEN, AUTH, id, data) => {
    if (data.loginCode) {
        return fetch((`${PATH}/students/${id}`), {
            method: 'PUT',
            headers: {
                'accept': '*/*',
                'X-Token': TOKEN,
                'Authorization': AUTH,
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify(data)
        })
    }
}