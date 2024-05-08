import React from 'react';
import c from './Contacts.module.css';
import tel from '../../../../images/phone.png';
import viber from '../../../../images/viber.png';
import telegram from '../../../../images/telegram.png';
import instagram from '../../../../images/instagram.png';
import facebook from '../../../../images/facebook.png';
import googlemaps from '../../../../images/googlemaps.png';
import telephoneWhite from '../../../../images/telephoneWhite.svg';
import telegramWhite from '../../../../images/telegramWhite.svg';
import viberWhite from '../../../../images/viberWhite.svg';
import mapsWhite from '../../../../images/mapsWhite.svg';
import facebookWhite from '../../../../images/facebookWhite.svg';
import instagramWhite from '../../../../images/instagramWhite.svg';
import { Contact } from './Contact';

export const Contacts = ({ social, phoneSoc, address, theme }) => {

    function getSocialMediaLink(socialMediaCode) {
        const foundLink = social.find(link => link.socialMediaCode === socialMediaCode);
        return foundLink ? foundLink.link : null;
    }

    return (
        <div className={c.cont}>
            <Contact text={phoneSoc[0]?.phoneNumber} hyper={`tel:${phoneSoc[0]?.phoneNumber}`} src={theme === 'light' ? tel : telephoneWhite} />
            <Contact text='Viber' hyper={getSocialMediaLink('VIBER')} src={theme === 'light' ? viber : viberWhite} />
            <Contact text='Telegram' hyper={getSocialMediaLink('TELEGRAM')} src={theme === 'light' ? telegram : telegramWhite} />
            <Contact text='Instagram' hyper={getSocialMediaLink('INSTAGRAM')} src={theme === 'light' ? instagram : instagramWhite} />
            <Contact text='Facebook' hyper={getSocialMediaLink('FACEBOOK')} src={theme === 'light' ? facebook : facebookWhite} />
            <Contact text={address[0]?.address} hyper={address[0]?.link} src={theme === 'light' ? googlemaps : mapsWhite} />
        </div>
    )
}
