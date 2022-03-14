import React from 'react';
import s from './Footer.module.css'
import sContainer from "../common/styles/Container.module.css";
import {FooterNav} from "./footerNav/FooterNav";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={`${s.footerContainer} ${sContainer.container}`}>
                <h3 className={s.title}>Evgeni Zhukovets</h3>
                <div className={s.socialIcons}>
                    <FooterNav/>
                    <FooterNav/>
                    <FooterNav/>
                    <FooterNav/>
                </div>
                <span className={s.copyright}>2022 Все права защищены</span>
            </div>
        </div>
    );
}