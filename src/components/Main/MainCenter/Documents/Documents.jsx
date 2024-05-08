import React, { useEffect, useState } from 'react';
import c from '../Contacts/Contacts.module.css';
import { Contact } from '../Contacts/Contact';
import document from '../../../../images/document.svg';
import { getDocuments } from '../../../../functions/getDocuments';


export const Documents = () => {

    const TOKEN = process.env.REACT_APP_TOKEN;
    const AUTH = process.env.REACT_APP_AUTH;
    const PATH = process.env.REACT_APP_API_PATH;

    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        (async function fetchDataStudent() {
            try {
                const response = await getDocuments(PATH, TOKEN, AUTH);
                const data = await response.json();
                setDocuments(data);
            }
            catch (error) {
                console.log('Network error: ', error)
            }
        })();
    }, [TOKEN, AUTH, PATH])

    return (
        <div className={c.cont}>
            {documents.map((item) => {
                return <Contact src={document} text={item.title} hyper={item.link} />
            })}
        </div>
    )
}
