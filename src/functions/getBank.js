export const getBank = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/bank-accounts`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}
