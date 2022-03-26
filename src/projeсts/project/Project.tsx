import React from 'react';
import s from './Project.module.scss'
import {Button} from '../../common/components/button/Button';

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
                <Button name={'View'}/>
            </div>
            <div className={s.projectInfo}>
                <div className={s.projectTitle}>{props.name}</div>
                <span className={s.projectDescription}> {props.description} </span>
            </div>
        </div>
    );
};
