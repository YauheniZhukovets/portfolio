import s from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


type SkillPropsType = {
    title: string
    description: string
    icon: any
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <FontAwesomeIcon transform={{rotate: -45}} icon={props.icon} style={{color: '#4e93e6'}}/>
            </div>
            <div className={s.skillInfo}>
                <div className={s.skillTitle}>{props.title}</div>
                <span className={s.skillDescription}>{props.description}</span>
            </div>
        </div>
    );
};
