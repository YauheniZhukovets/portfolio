import React from 'react';
import s from '../project/Project.module.css'

type ProjectPropsType = {
    name: string
}

export const Project = (props:ProjectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.image}>
                <div className={s.button}>Смотреть</div>
            </div>
            <div className={s.nameProject}>
                <span className={s.nameSpan}>{props.name}</span>
                <textarea className={s.textarea} placeholder={"Крaткое описание"} value={''}> </textarea>
            </div>
        </div>
    );
};
