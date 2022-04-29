import React from 'react';
import s from './FooterNav.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type FooterPropsType = {
    icon: IconProp
}

export const FooterNav = ({icon}: FooterPropsType) => {
    return (
        <div className={s.socialIcon}>
            <FontAwesomeIcon icon={icon} className={s.icon}/>
        </div>
    );
};
