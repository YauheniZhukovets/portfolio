import s from './Skill.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {SkillsArrayType} from '../Skills';


export const Skill = ({icon, title, description}: SkillsArrayType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <FontAwesomeIcon transform={{rotate: -45}} icon={icon}/>
            </div>
            <div className={s.skillInfo}>
                <div className={s.skillTitle}>{title}</div>
                <span className={s.skillDescription}>{description}</span>
            </div>
        </div>
    );
};
