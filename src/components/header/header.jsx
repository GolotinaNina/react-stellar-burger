import React from "react";
import headerStyles from './header.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';


class Header extends React.Component {
    render() {
      return (
        <header className={headerStyles.header}>
           {this.props.children}
           <nav className={headerStyles.content}>
            <ul className={headerStyles.menu}>  {this.props.children}
         <li>
            <a className={headerStyles.nav} hlef="">
            <BurgerIcon type="primary" />
           Конструктор
           </a>
         </li>
         <li className={headerStyles.link}>
         <a className={headerStyles.nav} hlef="">
         <ListIcon type="secondary" />
           Лента заказов
           </a>
         </li>
         </ul>
         <Logo />
        <li className={headerStyles.link}>
            <a className={headerStyles.nav} hlef="">
            <ProfileIcon type="secondary" />
           Личный кабинет
           </a>
         </li>
        </nav>
        </header>
      );
    }
}


  
export default Header;