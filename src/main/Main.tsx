import React from 'react';
import s from './Main.module.scss'
import photo from '../assets/image/avatar.jpg'
import ReactTypingEffect from 'react-typing-effect';


const Fade = require('react-reveal/Fade')



export const Main = () => {
    return (

        <div className={s.mainBlock}>
            <div className={s.container}>
                <Fade>
                    <div className={s.text}>
                        <div className={s.myGreeting}>Hi There</div>
                        <div className={s.fullName}>
                            I am <span className={s.name}> Evgeni Zhukovets</span>
                        </div>
                        <ReactTypingEffect className={s.myProfession} text={'Frontend Developer'}/>
                    </div>
                    <div className={s.photo} style={{backgroundImage: `url(${photo})`}}></div>
                </Fade>
            </div>
        </div>


    );
};


