import React from 'react';
import s from './Title.module.scss'

type TitlePropsType = {
    name: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <div className={s.title}>
            {props.name}
        </div>

    );
}
