import React from 'react';
import s from './Main.module.scss'
import photo from '../assets/image/avatar.jpg'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';

const Fade = require('react-reveal/Fade')

export const Main = () => {
    return (

        <div id={'home'} className={s.mainBlock}>
            <div className={s.container}>
                <Fade>
                    <div className={s.text}>
                        <div className={s.myGreeting}>Hi There</div>
                        <div className={s.fullName}>
                            I am <span className={s.name}> Evgeni Zhukovets</span>
                        </div>
                        <ReactTypingEffect className={s.myProfession} text={'Frontend Developer'}/>
                    </div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className={s.photo} style={{backgroundImage: `url(${photo})`}}></div>
                    </Tilt>
                </Fade>
            </div>
        </div>


    );
};


