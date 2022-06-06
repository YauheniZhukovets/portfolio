import React from 'react';
import s from './Skills.module.scss'
import {Title} from '../common/components/title/Title';
import {faJs, faReact, faSass, faTumblr} from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {Skill} from './Skill/Skill';

const Fade = require('react-reveal/Fade')

export type SkillsArrayType = {
    title: string
    icon: IconDefinition
    description: string
}

export const Skills = () => {

    const skillsArray: Array<SkillsArrayType> = [
        {
            title: 'Development',
            icon: faReact,
            description: 'React, Redux, AXIOS etc'
        },
        {
            title: 'Foundation',
            icon: faJs,
            description: 'JavaScript, TypeScript, HTML5, CSS3'
        },
        {
            title: 'Testing',
            icon: faTumblr,
            description: 'Unit Tests, SnapShot, Storybook'
        },
        {
            title: 'Design',
            icon: faSass,
            description: 'Material UI, Ant Design etc'
        },
    ]

    return (
        <div id={'skills'} className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <Title name={'Skills'}/>
                <Fade bottom>
                    <div className={s.skills}>
                        {skillsArray.map((skill, index) => {
                            return (
                                <Skill key={index}
                                       title={skill.title}
                                       description={skill.description}
                                       icon={skill.icon}
                                />
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    );
};
