import { objectCreating } from "./objectCreating";
import { studentCheck } from "./studentCheck";
import { studentPOST } from "./studentPOST";

const TOKEN = process.env.REACT_APP_TOKEN;
const AUTH = process.env.REACT_APP_AUTH;
const PATH = process.env.REACT_APP_API_PATH;
const PATH_HANDLER = process.env.REACT_APP_API_PATH_HANDLER;

export const onSubmitFunc = async (data, ageUnderEi, watch, setIsSuccess, setIsModalVisible, setError, setPage, navigate, loginCode) => {
    const student = objectCreating({ firstName: data.firstName, secondName: data.secondName, year: data.year, month: data.month, day: data.day, phone: data.phone });
    if (data.phone) {
        const response = await studentCheck(student, PATH, TOKEN, AUTH);
        if (!response || typeof response.status === 'undefined') {
            setIsSuccess(false);
            setIsModalVisible(true);
            setTimeout(() => { setIsModalVisible(false); }, 5000);
            return;
        }
        if (response.status === 404) {
            const responsePOST = await studentPOST({ 'firstname': student.firstname, 'lastname': student.lastname, 'dateOfBirth': student.dateOfBirth, 'phoneNumber': student.phoneNumber, 'paymentMethod': 'CASH', 'loginCode': loginCode }, PATH, TOKEN, AUTH);
            if (responsePOST.status !== 200) {
                setIsSuccess(false);
                setIsModalVisible(true);
                setTimeout(() => setIsModalVisible(false), 10000);
                return;
            }
        } else if (response.status === 200) {
            setIsSuccess(false);
            setError('phone', { type: 'custom', message: 'Даний номер телефону вже зареєстровано. Вкажіть, будь ласка, інший' })
            setPage(1);
            return;
        } else {
            setIsSuccess(false);
            setIsModalVisible(true);
            setTimeout(() => setIsModalVisible(false), 10000);
            return;
        }
    }
    setIsSuccess(true);
    setIsModalVisible(true);
    setTimeout(() => {
        navigate('/login')
    }, 5000);
    return;
};