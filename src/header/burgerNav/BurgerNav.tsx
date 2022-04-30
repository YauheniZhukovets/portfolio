import React, {useState} from 'react';
import s from './BurgerNav.module.scss'
import {Link} from 'react-scroll';
import menu from '../../assets/image/menu.svg'
import closeMenu from '../../assets/image/closeMenu.svg'

const items: Array<string> = ['home', 'skills', 'projects', 'contacts']

export const BurgerNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onClickBurgerHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={s.burgerNav}>
            <div className={isOpen ? `${s.burgerNavContainer} ${s.show}` : s.burgerNavContainer}>
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
                            </Link>
                        )
                    }
                )}
            </div>
            <div className={s.burgerButton}
                 onClick={onClickBurgerHandler}
                 style={isOpen ? {backgroundImage: `url(${closeMenu})`} : {backgroundImage: `url(${menu})`}}
            ></div>
        </div>
    );
};

