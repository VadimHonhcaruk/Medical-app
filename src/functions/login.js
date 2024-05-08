import { jwtDecode } from "jwt-decode";

export const login = (PATH, phone_number, login_code, setError, setCurrentIdStudent) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "phone_number": phone_number,
        "login_code": login_code,
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch("http://localhost:8000/login", requestOptions).then((response) => { setError(response.status); return response.json() })
        .then((result) => { setCurrentIdStudent(jwtDecode(result.id_token).user_id); localStorage.setItem('user_id', jwtDecode(result.id_token).user_id); })
        .catch((error) => setError(error));
};