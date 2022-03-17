import React from 'react';
import s from './Projects.module.css'
import {Project} from './project/Project';
import sContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';

export const Projects = () => {
   /* const social = {
        backgroundImage: 'url(' + imgUrl + ')',
    };*/

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
               <Title name={'Projects'} />
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
