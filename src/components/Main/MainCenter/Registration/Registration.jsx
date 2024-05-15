import React, { useEffect, useState } from 'react';
import c from './Registration.module.css';
import { useNavigate } from 'react-router-dom';
import trash from '../../../../images/trashBlue.svg';
import edit from '../../../../images/editBlue.svg';

const DoctorAppointmentForm = ({ appointments, setAppointments }) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [doctor, setDoctor] = useState('');
    const [comment, setComment] = useState('');
    const [open, setOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
    const [editIndex, setEditIndex] = useState(null);

    const availableTimes = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
    const availableDoctors = ["Терапевт", "Хірург", "Офтальмолог", "Педіатр", "Гінеколог", "Кардіолог", "Невролог", "Дерматолог", "Ендокринолог"];

    // const isFutureDate = (selectedDate) => {
    //     const currentDate = new Date();
    //     const selected = new Date(selectedDate);
    //     return selected >= currentDate;
    // };

    const handleEdit = (index) => {
        const appointment = futureAppointments[index];
        console.log(appointment);
        setDate(appointment.date);
        setTime(appointment.time);
        setDoctor(appointment.doctor);
        setComment(appointment.comment);
        setEditMode(true);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedAppointments = appointments.filter((_, i) => i !== index);
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
    };

    const isFutureAppointment = (appointment) => {
        const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`);
        const currentDateTime = new Date();
        return appointmentDateTime > currentDateTime;
    };

    const futureAppointments = appointments.filter(isFutureAppointment);
    const pastAppointments = appointments.filter(appointment => !isFutureAppointment(appointment));

    const handleDateChange = (event) => {
        const selectedDate = event.target.value;
        if (doctor && time) {
            const hasConflict = futureAppointments.some((appointment, index) =>
                appointment.date === selectedDate &&
                appointment.time === time &&
                appointment.doctor === doctor &&
                (editIndex === null || index !== editIndex)
            );
            if (hasConflict) {
                alert("Цей лікар вже зайнятий на вибрану дату і час.");
                setDate('');
                return;
            }
        }
        setDate(selectedDate);
    };

    const handleTimeChange = (event) => {
        const selectedTime = event.target.value;
        if (doctor && date) {
            const hasConflict = futureAppointments.some((appointment, index) =>
                appointment.date === date &&
                appointment.time === selectedTime &&
                appointment.doctor === doctor &&
                (editIndex === null || index !== editIndex)
            );
            if (hasConflict) {
                alert("Цей лікар вже зайнятий на вибрану дату і час.");
                setTime('');
                return;
            }
        }
        setTime(selectedTime);
    };

    const handleDoctorChange = (event) => {
        const selectedDoctor = event.target.value;
        if (date && time) {
            const hasConflict = futureAppointments.some((appointment, index) =>
                appointment.date === date &&
                appointment.time === time &&
                appointment.doctor === selectedDoctor &&
                (editIndex === null || index !== editIndex)
            );
            if (hasConflict) {
                alert("Цей лікар вже зайнятий на вибрану дату і час.");
                setDoctor('');
                return;
            }
        }
        setDoctor(selectedDoctor);
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
        setOpen(false);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        const updatedAppointment = {
            date: date,
            time: time,
            doctor: doctor,
            comment: comment
        };
        const updatedAppointments = appointments.map((appointment, index) => index === editIndex ? updatedAppointment : appointment);
        setAppointments(updatedAppointments);
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
        setDate('');
        setTime('');
        setDoctor('');
        setComment('');
        setEditMode(false);
        setEditIndex(null);
    };

    const filteredTimes = availableTimes.filter(timeSlot =>
        !futureAppointments.some((appointment, index) => appointment.date === date && appointment.time === timeSlot && appointment.doctor === doctor && (editIndex === null || index !== editIndex))
    );

    const filteredDoctors = availableDoctors.filter(doc =>
        !futureAppointments.some((appointment, index) => appointment.date === date && appointment.time === time && appointment.doctor === doc && (editIndex === null || index !== editIndex))
    );


    return (
        <div className={c.cont}>
            <div>
                <div className={c.flexReqiZap}>
                    <div className={c.oplata} onClick={() => { navigate('/requisites') }}>Реквізити</div>
                </div>
                <h2>Майбутні записи</h2>
                <ul>
                    {futureAppointments.length > 0 ? futureAppointments.map((appointment, index) => (
                        <li key={index}>
                            <img className={c.icons} src={edit} alt='edit' onClick={() => { handleEdit(index); setOpen(false); }}></img>
                            <img className={c.icons} src={trash} alt='delete' onClick={() => handleDelete(appointments.findIndex(app => app === appointment))}></img>
                            <strong>Дата:</strong> {appointment.date}, <strong>Час:</strong> {appointment.time}, <strong>Лікар:</strong> {appointment.doctor}, <strong>Коментар:</strong> {appointment.comment}
                        </li>
                    )) : <li>
                        <strong>Майбутні записи відсутні.</strong>
                    </li>}
                </ul>
                <h2>Попередні записи</h2>
                <ul>
                    {pastAppointments.length > 0 ? pastAppointments.map((appointment, index) => (
                        <li key={index}>
                            <strong>Дата:</strong> {appointment.date}, <strong>Час:</strong> {appointment.time}, <strong>Лікар:</strong> {appointment.doctor}, <strong>Коментар:</strong> {appointment.comment}
                        </li>
                    )) : <li>
                        <strong>Попередні записи відсутні.</strong>
                    </li>}
                </ul>
                <div className={c.butt} onClick={() => {
                    setOpen(true);
                    setEditMode(false);
                    setEditIndex(null);
                    setDate('');
                    setTime('');
                    setDoctor('');
                    setComment('');
                }}>Запис</div>
            </div>
            {open &&
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
                                {filteredTimes.map((timeSlot, index) => (
                                    <option key={index} value={timeSlot}>{timeSlot}</option>
                                ))}
                            </select>
                        </div>
                        <div className={c.flex}>
                            <label htmlFor="doctor">Лікар</label>
                            <select id="doctor" value={doctor} onChange={handleDoctorChange} required>
                                <option value="">Оберіть лікаря</option>
                                {filteredDoctors.map((doc, index) => (
                                    <option key={index} value={doc}>{doc}</option>
                                ))}
                            </select>
                        </div>
                        <div className={c.flex}>
                            <label htmlFor="comment">Коментар</label>
                            <textarea id="comment" value={comment} onChange={handleCommentChange} />
                        </div>
                        <button type="submit">Записатися</button>
                    </form>
                </div>}
            {editMode &&
                <div className={c.formik}>
                    <h2>Форма редагування запису</h2>
                    <form onSubmit={handleEditSubmit} className={c.contFlex}>
                        <div className={c.flex}>
                            <label htmlFor="edit-date">Дата</label>
                            <input type="date" id="edit-date" value={date} onChange={handleDateChange} required />
                        </div>
                        <div className={c.flex}>
                            <label htmlFor="edit-time">Час</label>
                            <select id="edit-time" value={time} onChange={handleTimeChange} required>
                                <option value="">Оберіть час</option>
                                {filteredTimes.map((timeSlot, index) => (
                                    <option key={index} value={timeSlot}>{timeSlot}</option>
                                ))}
                            </select>
                        </div>
                        <div className={c.flex}>
                            <label htmlFor="edit-doctor">Лікар</label>
                            <select id="edit-doctor" value={doctor} onChange={handleDoctorChange} required>
                                <option value="">Оберіть лікаря</option>
                                {filteredDoctors.map((doc, index) => (
                                    <option key={index} value={doc}>{doc}</option>
                                ))}
                            </select>
                        </div>
                        <div className={c.flex}>
                            <label htmlFor="edit-comment">Коментар</label>
                            <textarea id="edit-comment" value={comment} onChange={handleCommentChange} />
                        </div>
                        <button type="submit">Зберегти</button>
                    </form>
                </div>}
        </div>
    );
};

export default DoctorAppointmentForm;