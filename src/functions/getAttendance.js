export const getAttendance = (PATH, TOKEN, AUTH, id, startDate, endDate) => {
    return fetch((`${PATH}/attendances?endDate=${endDate}&startDate=${startDate}&studentId=${id}`), {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-Token': TOKEN,
            'Authorization': AUTH
        },
        mode: 'cors'
    })
}