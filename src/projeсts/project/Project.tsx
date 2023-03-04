import React from 'react';
import s from './Project.module.scss'
import {Button} from '../../common/components/button/Button';

type ProjectPropsType = {
    linkCodeBack?: string
    name: string
    description: string
    style: { backgroundImage: string }
    technologies: string
    linkCode: string
    linkDemo: string
}

export const Project = ({
                            linkCode,
                            name,
                            style,
                            description,
                            technologies,
                            linkDemo,
                            linkCodeBack
                        }: ProjectPropsType) => {
    return (
        <div className={s.project}>
            <div className={s.image} style={style}>
                <Button name={'View code'} link={linkCode}/>
                {
                    linkCodeBack && <Button name={'View code back-end'} link={linkCodeBack}/>
                }
                <Button name={'View demo'} link={linkDemo}/>
            </div>
            <div className={s.projectInfo}>
                <div className={s.projectTitle}>{name}</div>
                <p className={s.projectDescription}> {description} </p>
                <p className={s.technologies}> {technologies} </p>
            </div>
        </div>
    );
};
