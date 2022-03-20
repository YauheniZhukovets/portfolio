import React from 'react';
import s from './Project.module.scss'

type ProjectPropsType = {
    name: string
    description: string
    style: {
        backgroundImage:string
    }
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <a href={'/*'} className={s.viewBtn}>Смотреть</a>
            </div>
            <div className={s.projectInfo}>
                <div className={s.projectTitle}>{props.name}</div>
                <span className={s.projectDescription}> {props.description} </span>
            </div>
        </div>
    );
};
