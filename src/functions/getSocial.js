export const getSocial = (PATH, TOKEN, AUTH) => {
    return fetch((`${PATH}/company/socials`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}