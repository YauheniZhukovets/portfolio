import React from 'react';
import s from  './Skills.module.css'
import sContainer from  '../common/styles/Container.module.css'
import {Skill} from './Skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className= {`${sContainer.container} ${s.skillsContainer}`} >
                <Title name={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.'}/>
                    <Skill title={'CSS'} description={'Формальный язык описания внешнего вида документа, написанного с использованием языка разметки.'}/>
                    <Skill title={'React'} description={'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов'}/>
                </div>
            </div>
        </div>
    );
};
