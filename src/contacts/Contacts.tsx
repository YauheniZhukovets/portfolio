import React from 'react';
import s from './Contacts.module.scss'
import {Title} from '../common/components/title/Title';

const Fade = require('react-reveal/Fade')

export const Contacts = () => {
    return (
        <div id={'contacts'} className={s.contactsBlock}>
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
                        <button type={'submit'}>{'Send message'}</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}