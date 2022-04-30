import React from 'react';
import s from './Hire.module.scss'
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

const Fade = require('react-reveal/Fade')

export const Hire = () => {
    return (
        <div className={s.hireBlock}>
            <div className={s.hireContainer}>
                <Title name={'I Am Considering Options For Remote Work'}/>
                <Fade bottom>
                    <div className={s.hireBtn}>
                        <Button name={'Employ'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

