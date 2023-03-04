import React from 'react';
import s from './Projects.module.scss'
import {Project} from './project/Project';
import {Title} from '../common/components/title/Title';
import todolistImage from '../assets/image/todoList.jpg'
import socialImage from '../assets/image/socialNetwork.jpg'
import playingCardsImage from '../assets/image/PlayingCards.jpg'
import tasksImage from '../assets/image/tasks.png'
import counterImage from '../assets/image/counter.jpeg'
import collectionImage from '../assets/image/collection.jpg'

const Fade = require('react-reveal/Fade')

type ProjectsArrayType = {
    style: { backgroundImage: string }
    name: string
    linkCode: string
    linkDemo: string
    description: string
    technologies: string
    linkCodeBack?: string
}

export const Projects = () => {
    const personalCollection = {backgroundImage: `url(${collectionImage})`}
    const socialNetwork = {backgroundImage: `url(${socialImage})`}
    const todolist = {backgroundImage: `url(${todolistImage})`}
    const playingCards = {backgroundImage: `url(${playingCardsImage})`}
    const reactTasks = {backgroundImage: `url(${tasksImage})`}
    const counter = {backgroundImage: `url(${counterImage})`}

    const projectsArray: Array<ProjectsArrayType> = [
        {
            style: personalCollection,
            name: 'MyPersonalCollection',
            linkCode: 'https://github.com/YauheniZhukovets/personal-collection-client',
            linkCodeBack: 'https://github.com/YauheniZhukovets/personal-collection-server',
            linkDemo: 'https://personal-collection-client.vercel.app/',
            description: 'App created with MERN stack. The application has the ability to login/ register/logout. Authorized users can create collection from existing categories, add items. He can also like and write comments for items of other users. Full-text search and search by tags work on any page.',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Antd, Axios, Node JS, Express, MongoDB'
        },
        {
            style: todolist,
            name: 'ToDoList',
            linkCode: 'https://github.com/YauheniZhukovets/react-todolist',
            linkDemo: 'https://YauheniZhukovets.github.io/react-todolist',
            description: 'SPA for managing to-do lists and their items. Implemented: add todolist / task, ' +
                'remove todolist / task, rename todolist / task, marking the completed task, ' +
                'displaying all / active / confirmed tasks in todolist.',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Material UI, CSS module, Formik'
        },
        {
            style: socialNetwork,
            name: 'Social network',
            linkDemo: 'https://YauheniZhukovets.github.io/react-samurai',
            linkCode: 'https://github.com/YauheniZhukovets/react-samurai',
            description: 'SPA for social actions - messaging and blogging. Implemented: login page with validation, ' +
                'error displaying and captcha; 404 page; profile page with abilities to: view the information of the ' +
                'selected user, edit your profile information, change avatar, users page and friends page with ' +
                'abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, ' +
                'view any user profile.',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux, Axios, SCSS ,ReduxForm'
        },
        {
            style: playingCards,
            name: 'Playing cards',
            linkCode: 'https://github.com/YauheniZhukovets/Learn-cards',
            linkDemo: 'https://YauheniZhukovets.github.io/Learn-cards',
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
            linkCode: 'https://github.com/YauheniZhukovets/exam-Counter',
            linkDemo: 'https://YauheniZhukovets.github.io/exam-Counter',
            description: 'SPA. Counter with different settings. With display of information messages. With data ' +
                'storage in the "local storage"',
            technologies: 'Technologies: JavaScript, TypeScript, React, Redux'
        },
        {
            style: reactTasks,
            name: 'React tasks',
            linkCode: 'https://github.com/YauheniZhukovets/ignat-homeworks',
            linkDemo: 'https://YauheniZhukovets.github.io/ignat-homeworks',
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
                                         linkCode={project.linkCode}
                                         linkDemo={project.linkDemo}
                                         linkCodeBack={project.linkCodeBack}
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
