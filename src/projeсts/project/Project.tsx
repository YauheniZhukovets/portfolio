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

export const Project = ({link, name, style, description, technologies}: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={style}>
                <Button name={'View'} link={link}/>
            </div>
            <div className={s.projectInfo}>
                <div className={s.projectTitle}>{name}</div>
                <p className={s.projectDescription}> {description} </p>
                <p className={s.technologies}> {technologies} </p>
            </div>
        </div>
    );
};
