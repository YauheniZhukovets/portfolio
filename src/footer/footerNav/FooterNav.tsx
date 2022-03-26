import React from 'react';
import s from './FooterNav.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type FooterPropsType = {
    icon: any
}

export const FooterNav = (props: FooterPropsType) => {
    return (
        <div className={s.socialIcon}>
            <FontAwesomeIcon icon={props.icon} style={{color: '#4e93e6'}}/>
        </div>
    );
};
