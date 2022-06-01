import React from 'react';
import s from './Modal.module.scss';

type PropsType = {
    closeModal: () => void
    children: React.ReactNode
    title?: string
}

export const Modal = ({closeModal, children, title}: PropsType) => {

    return (
        <div className={s.modal}>
            <div className={s.overlay} onClick={closeModal}/>
            <div className={s.dialog}>
                {title && <h3>{title}</h3>}
                <div className={s.content}>{children}</div>
                <button className={s.close} onClick={closeModal}>x</button>
            </div>
        </div>
    );
};



