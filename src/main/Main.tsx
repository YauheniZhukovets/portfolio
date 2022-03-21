import React from 'react';
import s from './Main.module.scss'
import sContainer from '../common/styles/Container.module.css'
import photo from '../assets/image/avatar.jpg'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${sContainer.container} ${s.container}`}>
                <div className={s.text}>
                    <div className={s.myGreeting}>Hi There</div>
                    <div className={s.fullName}>
                        I am <span className={s.name}> Evgeni Zhukovets</span>
                    </div>
                    <div className={s.myProfession}>Frontend Developer</div>
                </div>
                <div className={s.photo} style={{backgroundImage:`url(${photo})`}}> </div>
            </div>

        </div>
    );
};


