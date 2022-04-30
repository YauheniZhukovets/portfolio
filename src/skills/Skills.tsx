import React from 'react';
import s from './Skills.module.scss'
import {Title} from '../common/components/title/Title';
import {faCss3, faJs, faReact} from '@fortawesome/free-brands-svg-icons';
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
            title: 'Js',
            icon: faJs,
            description: 'is a scripting language that enables you to create dynamically updating content,' +
                ' control multimedia, animate images, and pretty much everything else.'
        },
        {
            title: 'Css',
            icon: faCss3,
            description: 'is a language of style rules that we use to apply styling to our HTML' +
                ' content, for example setting background colors and fonts,' +
                ' and laying out our content in multiple columns.'
        },
        {
            title: 'React',
            icon: faReact,
            description: 'it is a tool for creating user interfaces. ' +
                'Its main task is to provide a display of what can be seen on web pages.'
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
