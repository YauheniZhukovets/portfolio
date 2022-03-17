import React from 'react';
import s from '../project/Project.module.css'

type ProjectPropsType = {
    name: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.image}>
                <a href={'/*'} className={s.viewBtn}>Смотреть</a>
            </div>
            <div className={s.projectInfo}>
                <div className={s.projectTitle}>{props.name}</div>
                <span className={s.description}> {props.description} </span>
            </div>
        </div>
    );
};
