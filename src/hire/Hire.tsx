import React from 'react';
import s from './Hire.module.scss'
import sContainer from "../common/styles/Container.module.css";
import {Title} from '../common/components/title/Title';

export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${sContainer.container} ${s.hireContainer} `}>
                <Title name={'I Am Considering Options For Remote Work'}/>
                    <a href={'/*'} className={s.hireBtn}>EMPLOY</a>
            </div>
        </div>
    );
};

