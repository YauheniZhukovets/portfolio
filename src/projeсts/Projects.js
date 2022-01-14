import React from 'react';
import s from  './Projects.module.css'
import {Project} from "./project/Project";
import sContainer from  '../common/styles/Container.module.css'

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${s.projectsContainer} ${sContainer.container}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>
    );
};
