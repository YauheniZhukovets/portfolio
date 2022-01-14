import React from 'react';
import s from './Footer.module.css'
import sContainer from "../common/styles/Container.module.css";
import {FooterNav} from "./footerNav/FooterNav";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s.footerContainer} ${sContainer.container}`}>
                <h3 className={s.title}>Evgeni Zhukovets</h3>
                <div className={s.bar}>
                    <FooterNav/>
                    <FooterNav/>
                    <FooterNav/>
                    <FooterNav/>
                </div>
                <h3 className={s.text}>2022 Все права защищены</h3>
            </div>
        </div>
    );
}