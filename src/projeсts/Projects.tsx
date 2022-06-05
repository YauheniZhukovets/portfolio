import React from 'react';
import s from './Projects.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todolistImage from '../assets/image/todoList.jpg'
import socialImage from '../assets/image/socialNetwork.jpg'
import playingCardsImage from '../assets/image/PlayingCards.jpg'
import tasksImage from '../assets/image/tasks.png'
import counterImage from '../assets/image/counter.jpeg'

const Fade = require('react-reveal/Fade')

type ProjectsArrayType = {
    style: { backgroundImage: string }
    name: string
    link: string
    description: string
    technologies: string
}

export const Projects = () => {
    const socialNetwork = {backgroundImage: `url(${socialImage})`}
    const todolist = {backgroundImage: `url(${todolistImage})`}
    const playingCards = {backgroundImage: `url(${playingCardsImage})`}
    const reactTasks = {backgroundImage: `url(${tasksImage})`}
    const counter = {backgroundImage: `url(${counterImage})`}

    const projectsArray: Array<ProjectsArrayType> = [
        {
            style: todolist,
            name: 'ToDoList',
            link: 'https://github.com/YauheniZhukovets/react-todolist',
            description: 'SPA for managing to-do lists and their items. Implemented: add todolist / task, ' +
                'remove todolist / task, rename todolist / task, marking the completed task, ' +
                'displaying all / active / confirmed tasks in todolist.',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Material UI, CSS module, Formik'
        },
        {
            style: socialNetwork,
            name: 'Social network',
            link: 'https://github.com/YauheniZhukovets/react-samurai',
            description: 'SPA for social actions - messaging and blogging. Implemented: login page with validation, ' +
                'error displaying and captcha; 404 page; profile page with abilities to: view the information of the ' +
                'selected user, edit your profile information, change avatar, users page and friends page with ' +
                'abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, ' +
                'view any user profile.',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Axios, ReduxForm'
        },
        {
            style: playingCards,
            name: 'Playing cards',
            link: 'https://github.com/YauheniZhukovets/Learn-cards',
            description: 'SPA for learning by cards. Implemented: login page with validation; ' +
                'register page with validation; 404 page; profile page with abilities to: edit your profile information' +
                ' (change avatar and nickname), add a new card pack and edit, search, sort, view, remove and learn ' +
                'your card packs; packs list page with abilities to: search, sort, view and learn any card packs; ' +
                'learn page with abilities to answer a question and evaluate your answer.',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Axios, Formik'
        },
        {
            style: counter,
            name: 'Counter',
            link: 'https://github.com/YauheniZhukovets/exam-Counter',
            description: 'SPA. Counter with different settings. With display of information messages. With data ' +
                'storage in the "local storage"',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux'
        },
        {
            style: reactTasks,
            name: 'React tasks',
            link: 'https://github.com/YauheniZhukovets/ignat-homeworks',
            description: 'SPA. A lot of different tasks during training. Implemented:  404 page, page navigation',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Axios'
        },
    ]

    return (
        <div id={'projects'} className={s.projectsBlock}>
            <div className={s.projectsContainer}>
                <Title name={'Projects'}/>
                <Fade bottom>
                    <div className={s.projects}>
                        {projectsArray.map((project, index) => {
                            return (
                                <Project key={index}
                                         style={project.style}
                                         name={project.name}
                                         link={project.link}
                                         description={project.description}
                                         technologies={project.technologies}
                                />
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    );
}
