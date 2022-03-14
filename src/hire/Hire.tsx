import React from 'react';
import s from './Hire.module.css'
import sContainer from "../common/styles/Container.module.css";

export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={`${sContainer.container} ${s.hireContainer} `}>
                    <h2 className={s.title}>I Am Considering Options For Remote Work</h2>
                    <a href={'/*'} className={s.hireBtn}>EMPLOY</a>
            </div>
        </div>
    );
};

