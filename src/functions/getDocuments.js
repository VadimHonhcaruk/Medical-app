export const getDocuments = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/documents`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
