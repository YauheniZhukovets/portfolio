import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';
import {Button} from '../common/components/button/Button';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${sContainer.container}`}>
                <Title name={'Contact'}/>
                <form className={s.contactForm}>
                    <input className={s.formGroupInput} type="text" placeholder={'Name'}/>
                    <input className={s.formGroupInput} type="text" placeholder={'E-mail'}/>
                    <textarea className={s.formGroupTextarea}
                              rows={7}
                              placeholder={'Describe yourself here...'}>
                    </textarea>
                    <Button name={'Send message'} type={'submit'}/>
                </form>
            </div>
        </div>
    );
}