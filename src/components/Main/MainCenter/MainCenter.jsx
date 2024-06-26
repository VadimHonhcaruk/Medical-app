import React, { useEffect, useState } from 'react';
import c from './MainCenter.module.css';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import { Contacts } from './Contacts/Contacts';
import { Documents } from './Documents/Documents';
import { Requisites } from './Requisites/Requisites';
import { Profile } from './Profile/Profile';
import DoctorAppointmentForm from './Registration/Registration';

export const MainCenter = ({ studentData, currentIdStudent, social, phoneSoc, address, theme }) => {

    const [amount, setAmount] = useState(0);
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appointments'));
        if (storedAppointments) {
            setAppointments(storedAppointments);
        }
    }, []);

    useEffect(() => {
        if (appointments) {
            setAmount(400 * appointments.length);
        }
    }, [appointments])



    return (
        <div className={c.main}>
            <div className={c.mainleft}>
                <Routes>
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/contacts" element={<Contacts social={social} phoneSoc={phoneSoc} address={address} theme={theme} />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/requisites" element={<Requisites amount={amount} />} />
                    <Route path="/attendance" element={<DoctorAppointmentForm appointments={appointments} setAppointments={setAppointments} />} />
                    <Route path="/profile" element={<Profile currentIdStudent={currentIdStudent} studentData={studentData} />} />
                </Routes>
            </div>
        </div>
    )
}
