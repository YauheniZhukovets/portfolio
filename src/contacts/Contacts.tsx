import React from 'react';
import s from './Contacts.module.scss'
import sContainer from '../common/styles/Container.module.css';
import {Title} from '../common/components/title/Title';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${sContainer.container}`}>
                <Title name={'Contact'} />
                <form className={s.contactForm}>
                    <input type="text" placeholder={'Name'}/>
                    <input type="text" placeholder={'E-mail'}/>
                    <textarea rows={7} placeholder={'Describe yourself here...'}> </textarea>
                    <button type={'submit'} className={s.submitBtn}>Snd message</button>
                </form>
            </div>
        </div>
    );
}