import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    name: string
    type?: 'submit' | 'reset' | 'button'
}

export const Button = (props: ButtonPropsType) => {
    return (
        <button type={props.type} className={s.btn}>
            {props.name}
        </button>

    );
}
