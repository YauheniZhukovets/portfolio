import React from 'react';
import s from './Footer.module.scss'
import sContainer from '../common/styles/Container.module.css';
import {FooterNav} from './footerNav/FooterNav';
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faW} from '@fortawesome/free-solid-svg-icons';


export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s.footerContainer} ${sContainer.container}`}>
                <div className={s.title}>Evgeni Zhukovets</div>
                <div className={s.socialIcons}>
                    <FooterNav icon={faTelegram}/>
                    <FooterNav icon={faLinkedin}/>
                    <FooterNav icon={faGithub}/>
                    <FooterNav icon={faW}/>
                </div>
                <span className={s.copyright}>© 2022 All Rights Reserved</span>
            </div>
        </div>
    );
}