export const getPhone = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/company/phones`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}