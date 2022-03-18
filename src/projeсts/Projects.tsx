import React from 'react';
import s from './Projects.module.scss'
import {Project} from './project/Project';
import sContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';
import todolistImage from './../assets/image/TodoList.jpg'
import socialImage from './../assets/image/SocialNetwork.jpg'

export const Projects = () => {
    const social = { backgroundImage: `url(${socialImage})` }
    const todolist = { backgroundImage: `url(${todolistImage})` }

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
               <Title name={'Projects'} />
                <div className={s.projects}>
                    <Project
                        style={todolist}
                        name={'ToDoList'}
                        description={'Easily organize and prioritize your tasks and projects ' +
                            'so you’ll always know exactly what to work on next.'}/>
                    <Project
                        style={social}
                        name={'Way of the Samurai'}
                        description={'Social networking involves the development and' +
                            ' maintenance of personal and business relationships using technology. '}/>
                </div>
            </div>
        </div>
    );
}
