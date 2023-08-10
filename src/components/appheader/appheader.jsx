import React from "react";
import appheaderStyles from './appheader.module.css';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ListIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';


class AppHeader extends React.Component {
    render() {
      return (
        <header className={appheaderStyles.header}>
           {this.props.children}
           <nav className={appheaderStyles.content}>
            <ul className={appheaderStyles.menu}>  {this.props.children}
         <li>
            <a className={appheaderStyles.nav} hlef="">
            <BurgerIcon type="primary" />
           Конструктор
           </a>
         </li>
         <li className={appheaderStyles.link}>
         <a className={appheaderStyles.nav} hlef="">
         <ListIcon type="secondary" />
           Лента заказов
           </a>
         </li>
         </ul>
         <Logo />
        <li className={appheaderStyles.link}>
            <a className={appheaderStyles.nav} hlef="">
            <ProfileIcon type="secondary" />
           Личный кабинет
           </a>
         </li>
        </nav>
        </header>
      );
    }
}


  
export default AppHeader;