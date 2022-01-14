import React from 'react';
import s from  '../project/Project.module.css'

export const Project = () => {
    return (
        <div className={s.projectBlock}>
            <div>
                <div className={s.image}>
                    <div className={s.button}>Смотреть</div>
                </div>
            </div>
            <div className={s.nameProject}>
                <span className={s.nameSpan}>Название проекта</span>
                <textarea className={s.textarea} placeholder={"Крaткое описание"} name="text">
                </textarea>
            </div>
        </div>
    );
};
