import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${sContainer.container}`}>
                <h2 className={s.title}>Контакты</h2>
                <form className={s.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea> </textarea>
                    <button type={'submit'} className={s.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    );
}