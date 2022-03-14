import React from 'react';
import s from './Projects.module.css'
import {Project} from './project/Project';
import sContainer from '../common/styles/Container.module.css'

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.projects}>
                    <Project
                        name={'ToDoList'}
                        description={'Easily organize and prioritize your tasks and projects ' +
                            'so you’ll always know exactly what to work on next.'}/>
                    <Project
                        name={'Way of the Samurai'}
                        description={'Social networking involves the development and' +
                            ' maintenance of personal and business relationships using technology. '}/>
                </div>
            </div>
        </div>
    );
}
