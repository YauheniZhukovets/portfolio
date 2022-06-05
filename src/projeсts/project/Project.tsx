import React from 'react';
import s from './Project.module.scss'
import {Button} from '../../common/components/button/Button';

type ProjectPropsType = {
    name: string
    description: string
    style: { backgroundImage: string }
    technologies: string
    link: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={props.style}>
                <Button name={'View'} link={props.link}/>
            </div>
            <div className={s.projectInfo}>
                <div className={s.projectTitle}>{props.name}</div>
                <p className={s.projectDescription}> {props.description} </p>
                <p className={s.technologies}> {props.technologies} </p>
            </div>
        </div>
    );
};
