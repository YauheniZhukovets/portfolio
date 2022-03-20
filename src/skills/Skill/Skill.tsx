import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}> </div>
            <div className={s.skillInfo}>
                <div className={s.skillTitle}>{props.title}</div>
                <span className={s.skillDescription}>{props.description}</span>
            </div>
        </div>
    );
};
