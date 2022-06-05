import React from 'react';
import s from './Main.module.scss'
import photo from '../assets/image/avatar.jpg'
import bgImage from '../assets/image/bgImage.jpg'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {Parallax} from 'react-parallax';
const Fade = require('react-reveal/Fade')

export const Main = () => {

    return (
        <Parallax
            bgImage={bgImage}
            strength={600}
            bgImageStyle={{width: '100vw', height: '100vh', objectFit: 'cover',opacity: 0.3, }}
        >
            <div id={'home'} className={s.mainBlock}>
                <div className={s.container}>
                    <Fade bottom>
                        <div className={s.text}>
                            <div className={s.myGreeting}>Hi There</div>
                            <div className={s.fullName}>
                                I am <span className={s.name}> Evgeni Zhukovets</span>
                            </div>
                            <ReactTypingEffect className={s.myProfession}  text={'Frontend Developer'}/>
                        </div>

                        <div className={s.photoContainer}>
                            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                                <div className={s.photo} style={{backgroundImage: `url(${photo})`}}></div>
                            </Tilt>
                        </div>
                    </Fade>
                </div>

            </div>
        </Parallax>
    );
};


