import React from 'react';
import c from './MainCenter.module.css';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './NotFound/NotFound';
import { Contacts } from './Contacts/Contacts';
import { Documents } from './Documents/Documents';
import { Requisites } from './Requisites/Requisites';
import { Profile } from './Profile/Profile';

export const MainCenter = ({ studentData, currentIdStudent, social, phoneSoc, address, theme }) => {
    return (
        <div className={c.main}>
            <div className={c.mainleft}>
                <Routes>
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/contacts" element={<Contacts social={social} phoneSoc={phoneSoc} address={address} theme={theme} />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/requisites" element={<Requisites />} />
                    <Route path="/attendance" element={<></>} />
                    <Route path="/profile" element={<Profile currentIdStudent={currentIdStudent} studentData={studentData} />} />
                </Routes>
            </div>
        </div>
    )
}
