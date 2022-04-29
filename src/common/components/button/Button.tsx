import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    name: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <a href={' '} className={s.btn}>{props.name}</a>

    );
}
