import nameCorrector from './nameCorrector';
import phoneCorrector from './phoneCorrector';

export const objectCreating = (data) => {
    if (!data.day && !data.month) {
        data.day = '01';
        data.month = '01';
    }
    return {
        dateOfBirth: `${data.year}-${data.month}-${data.day}`,
        firstname: nameCorrector(data.firstName),
        lastname: nameCorrector(data.secondName),
        phoneNumber: phoneCorrector(data.phone)
    }
}