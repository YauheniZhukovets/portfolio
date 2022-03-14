import React from 'react';
import s from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="">Главная</a>
            <a href="">Скилы</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    );
};

