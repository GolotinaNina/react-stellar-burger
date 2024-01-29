import React from "react";
import { FormInputEmail } from "../../components/FormContainer/FormContainerInputs/FormInputEmail";
import { FormInputName } from "../../components/FormContainer/FormContainerInputs/FormInputName";
import { FormInputPassword } from "../../components/FormContainer/FormContainerInputs/FormInputPassword";
import { Link } from "react-router-dom";
import { FormFooterLinks } from "../../components/FormContainer/FormContainerLinks/FormFooterLinks";
import styles from "../../components/FormContainer/FormContainer.module.css";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { FormInputToken } from "../../components/FormContainer/FormContainerInputs/FormInputToken";
import { NavigateButtonProps } from "../../types/types";

export const Inputs = {
    email: <FormInputEmail placeholder="E-mail" key="email" />,
    password: <FormInputPassword placeholder="Пароль"  key="password"/>,
    newPassword: <FormInputPassword placeholder="Введите новый пароль" key="newPassword"/>,
    token: <FormInputToken placeholder="Введите проверочный код из письма" key="token"/>,
    name: <FormInputName placeholder="Имя" key="name"/>,
    specifyEmail: <FormInputEmail placeholder="Введите E-mail" key="specifyEmail"/>,
    profileName: <FormInputName placeholder="Имя" key='name'/>,
    profileEmail: <FormInputEmail placeholder="E-mail" key='email'/>,
    profilePassword: <FormInputPassword placeholder="Пароль" key='password'/>
}
export const Links = {
    alreadyRegistered: <FormFooterLinks key="alreadyRegistered" infoText="Уже зарегистрированы?"><Link to="/login" className={`${styles.link}`}>Войти</Link></FormFooterLinks>,
    rememberPassword: <FormFooterLinks key="rememberPassword" infoText="Вспомнили пароль?"><Link to="/login" className={`${styles.link}`}>Войти</Link></FormFooterLinks>,
    forgotPassword: <FormFooterLinks key="forgotPassword" infoText="Забыли пароль?"><Link to="/forgot-password" className={`${styles.link}`}>Восстановить пароль</Link></FormFooterLinks>,
    newUser: <FormFooterLinks key="newUser" infoText="Вы - новый пользователь?"><Link to="/register" className={`${styles.link}`}>Зарегистрироваться</Link></FormFooterLinks>
}

export const navigateButton = ({onClick, label}: NavigateButtonProps) => {
    return <Button htmlType="button" type="primary" size="medium" children={label} onClick={onClick}/>
  }

export const Buttons = {
    save: <Button htmlType="submit" type="primary" size="medium" children="Сохранить" key='save'/>,
    cancel: <Button htmlType="reset" type="secondary" size="medium" children="Отмена" key='cancel'/>
}
