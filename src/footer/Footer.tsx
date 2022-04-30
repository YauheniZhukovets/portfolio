import React from 'react';
import s from './Footer.module.scss'
import {FooterNav} from './footerNav/FooterNav';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faW} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

type FooterIconsType = {
    icon: IconDefinition
    link: string
}

const footerIcons: Array<FooterIconsType> = [
    {icon: faTelegram, link: 'https://t.me/YauheniZhukovets'},
    {icon: faLinkedin, link: 'https://www.linkedin.com/in/yauheni-zhukovets/'},
    {icon: faGithub, link: 'https://github.com/YauheniZhukovets'},
    {icon: faW, link: 'https://www.codewars.com/users/YauheniZhukovets'}
]

export const Footer = () => {

    return (
        <div className={s.footer}>
            <div className={s.footerContainer}>
                <div className={s.title}>Evgeni Zhukovets</div>
                <div className={s.socialIcons}>
                    {footerIcons.map((item, index) => {
                        return (
                            <FooterNav key={index}
                                       icon={item.icon}
                                       link={item.link}
                            />
                        )
                    })}
                </div>
                <span className={s.copyright}>© 2022 All Rights Reserved</span>
            </div>
        </div>
    );
}