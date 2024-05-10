import React, { useEffect, useState } from 'react';
import c from './Registration.module.css';

const DoctorAppointmentForm = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const [comment, setComment] = useState('');
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appointments'));
        if (storedAppointments) {
            setAppointments(storedAppointments);
        }
    }, []);

    const isFutureDate = (selectedDate) => {
        const currentDate = new Date();
        const selected = new Date(selectedDate);
        return selected >= currentDate;
    };

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        if (isFutureDate(selectedDate)) {
            setDate(selectedDate);
        } else {
            alert("Будь ласка, оберіть майбутню дату.");
        }
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleDoctorChange = (event) => {
        setDoctor(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAppointment = {
            date: date,
            time: time,
            doctor: doctor,
            comment: comment
        };
        const updatedAppointments = [...appointments, newAppointment];
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
        setDate('');
        setTime('');
        setDoctor('');
        setComment('');
    };

    return (
        <div className={c.cont}>
            <div className={c.formik}>
                <h2>Форма запису до лікаря</h2>
                <form onSubmit={handleSubmit} className={c.contFlex}>
                    <div className={c.flex}>
                        <label htmlFor="date">Дата</label>
                        <input type="date" id="date" value={date} onChange={handleDateChange} required />
                    </div>
                    <div className={c.flex}>
                        <label htmlFor="time">Час</label>
                        <select id="time" value={time} onChange={handleTimeChange} required>
                            <option value="">Оберіть час</option>
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                        </select>
                    </div>
                    <div className={c.flex}>
                        <label htmlFor="doctor">Лікар</label>
                        <select id="doctor" value={doctor} onChange={handleDoctorChange} required>
                            <option value="">Оберіть лікаря</option>
                            <option value="Терапевт">Терапевт</option>
                            <option value="Хірург">Хірург</option>
                            <option value="Офтальмолог">Офтальмолог</option>
                            <option value="Педіатр">Педіатр</option>
                            <option value="Гінеколог">Гінеколог</option>
                            <option value="Кардіолог">Кардіолог</option>
                            <option value="Невролог">Невролог</option>
                            <option value="Дерматолог">Дерматолог</option>
                            <option value="Ендокринолог">Ендокринолог</option>
                        </select>
                    </div>
                    <div className={c.flex}>
                        <label htmlFor="comment">Коментар</label>
                        <textarea id="comment" value={comment} onChange={handleCommentChange} />
                    </div>
                    <button type="submit">Записатися</button>
                </form>
                <h2>Попередні записи</h2>
                <ul>
                    {appointments.map((appointment, index) => (
                        <li key={index}>
                            <strong>Дата:</strong> {appointment.date}, <strong>Час:</strong> {appointment.time}, <strong>Лікар:</strong> {appointment.doctor}, <strong>Коментар:</strong> {appointment.comment}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DoctorAppointmentForm;