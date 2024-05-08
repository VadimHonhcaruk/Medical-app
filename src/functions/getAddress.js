export const getAddress = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/company/addresses`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}