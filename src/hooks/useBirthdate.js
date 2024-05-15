import { useState, useEffect } from "react";

export const useBirthdate = (dayb, yearb, monthb, watch, now, setIsValideDate, setAgeUnderTw, setAgeUnderEi) => {
    const [age, setAge] = useState(18);
    const dateOfBirthWatch = watch([yearb, monthb, dayb]);
    useEffect(() => {
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        setIsValideDate(true);
        const day = watch(dayb);
        const month = watch(monthb);
        const year = watch(yearb);
        if (day === '' || month === '' || year === '') {
            return;
        }
        const dob = new Date(year, month - 1, day);
        const valid = new Date(year, month - 1, 1);
        if (dob.getMonth() !== valid.getMonth()) {
            setIsValideDate(false);
        };
        const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
        setAge(today.getFullYear() - dob.getFullYear());
        if (today < dobnow) {
            setAge(prev => prev - 1);
        };
        age < 12 ? setAgeUnderTw(true) : setAgeUnderTw(false);
        age < 18 ? setAgeUnderEi(true) : setAgeUnderEi(false);
    }, [dayb, yearb, monthb, now, setAgeUnderEi, setAgeUnderTw, setIsValideDate, dateOfBirthWatch, age, watch])
}