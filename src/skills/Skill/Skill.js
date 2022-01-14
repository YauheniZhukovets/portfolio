import s from './Skill.module.css'


export const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}> </div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
};
