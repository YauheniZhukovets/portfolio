import React from 'react';
import s from './Nav.module.scss'
import {Link} from 'react-scroll';

const items:Array<string> = ['home', 'skills', 'projects', 'contacts']

export const Nav = () => {

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
                                  offset={-60}
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

