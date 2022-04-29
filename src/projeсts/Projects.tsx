import React from 'react';
import s from './Projects.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todolistImage from './../assets/image/TodoList.jpg'
import socialImage from './../assets/image/SocialNetwork.jpg'

const Fade = require('react-reveal/Fade')

export const Projects = () => {
    const social = {backgroundImage: `url(${socialImage})`}
    const todolist = {backgroundImage: `url(${todolistImage})`}

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title name={'Projects'}/>
                <Fade bottom>
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
                </Fade>
            </div>
        </div>
    );
}
