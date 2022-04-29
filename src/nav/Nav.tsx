import React from 'react';
import s from './Nav.module.scss'
import {Link} from 'react-scroll';

export const Nav = () => {
    const items = ['home', 'skills', 'projects', 'contacts']
    return (
        <div className={s.nav}>
            <div className={s.navContainer}>
                {items.map((item, index) => {
                        return (
                            <Link key={index}
                                  to={item}
                                  activeClass={s.active}
                                  spy={true}
                                  smooth={true}
                                  offset={0}
                                  duration={500}
                            >
                                {item}
                            </Link>)
                    }
                )}
            </div>
        </div>
    );
};

