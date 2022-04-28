import React from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

const Fade = require('react-reveal/Fade')

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <Title name={'Contact'}/>
                <Fade bottom>
                    <form className={s.contactForm}>
                        <input className={s.formGroupInput} type="text" placeholder={'Name'}/>
                        <input className={s.formGroupInput} type="text" placeholder={'E-mail'}/>
                        <textarea className={s.formGroupTextarea}
                                  rows={7}
                                  placeholder={'Describe yourself here...'}>
                    </textarea>
                        <Button name={'Send message'} type={'submit'}/>
                    </form>
                </Fade>
            </div>
        </div>
    );
}