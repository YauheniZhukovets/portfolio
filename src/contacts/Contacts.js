import React from 'react';
import s from './Contacts.module.css'
import sContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s.contactsContainer} ${sContainer.container}`}>
                <h3 className={s.title}>Контакты</h3>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea value={''} > </textarea>
                </form>
                <div className={s.button}>Отправить</div>
            </div>
        </div>
    );
}