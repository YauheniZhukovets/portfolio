import React from 'react';
import s from './FooterNav.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type FooterPropsType = {
    icon: IconProp
    link: string
}

export const FooterNav = ({icon, link}: FooterPropsType) => {
    return (
        <a href={link} target={'_blank'} rel="noreferrer">
            <div className={s.socialIcon}>
                <FontAwesomeIcon icon={icon} className={s.icon}/>
            </div>
        </a>
    );
};
