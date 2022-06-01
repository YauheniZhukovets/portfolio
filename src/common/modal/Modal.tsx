import React from 'react';
import s from './Modal.module.scss';

type PropsType = {
    closeModal: () => void
    children: React.ReactNode
}

export const Modal = ({closeModal, children,}: PropsType) => {
    return (
        <div className={s.modal}>
            <div className={s.overlay} onClick={closeModal}/>
            <div className={s.dialog}>
                <div className={s.content}>{children}</div>
                <button className={s.close} onClick={closeModal}>x</button>
            </div>
        </div>
    );
};



