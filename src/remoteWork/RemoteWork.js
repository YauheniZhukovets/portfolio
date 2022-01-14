import React from 'react';
import s from './RemoteWork.module.css'
import sContainer from "../common/styles/Container.module.css";

export const RemoteWork = () => {
    return (
        <div className={s.remoteWorkBlock}>
            <div className={`${s.remoteWorkContainer} ${sContainer.container}`}>
                    <h3 className={s.title}>Рассматриваю варианты удалённой работы</h3>
                    <div className={s.button}>Нанять меня</div>
            </div>
        </div>
    );
};

