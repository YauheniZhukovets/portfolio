import React from 'react';
import s from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.navLink} href=" ">Home</a>
            <a className={s.navLink} href=" ">Skills</a>
            <a className={s.navLink} href=" ">Projects</a>
            <a className={s.navLink} href=" ">Contact</a>
        </div>
    );
};

