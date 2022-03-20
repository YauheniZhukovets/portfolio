import React from 'react';
import s from './Skills.module.scss'
import sContainer from '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title name={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'Js'}
                           description={'is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.'}
                    />
                    <Skill title={'Css'}
                           description={'is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.'}
                    />
                    <Skill title={'React'}
                           description={'it is a tool for creating user interfaces. Its main task is to provide a display of what can be seen on web pages.'}
                    />
                    <Skill title={'Js'}
                           description={'is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.'}
                    />
                    <Skill title={'Css'}
                           description={'is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.'}
                    />
                    <Skill title={'React'}
                           description={'it is a tool for creating user interfaces. Its main task is to provide a display of what can be seen on web pages.'}
                    />
                </div>
            </div>
        </div>
    );
};
