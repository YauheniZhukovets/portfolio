import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    name: string
    link: string
}

export const Button = ({link, name}: ButtonPropsType) => {
    return (
        <div>
            <a href={link} target={'_blank'} rel="noreferrer" className={s.btn}>{name}</a>
        </div>

    );
}
