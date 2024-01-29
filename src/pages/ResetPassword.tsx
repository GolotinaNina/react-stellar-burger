import React from "react";
import { navigateButton, Inputs, Links } from "../utils/inputs/inputs";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../services/store";
import { postApiReset } from "../utils/api";


export function ResetPassword() {

    const navigate = useNavigate()
    const password = useAppSelector((store) => store.inputs.password)
    const token = useAppSelector((store) => store.inputs.token)

    function onClick() {
        postApiReset(password, token)
        navigate('/login', {replace:false})
    }

    const resetPasswordFormHeader = "Восстановление пароля";
    const resetPasswordInputs = [Inputs.newPassword, Inputs.token];
    const resetPasswordButton = navigateButton({onClick: onClick, label:"Сохранить"});
    const resetPasswordLinks = [Links.rememberPassword];

    return (
        <FormContainerOther header={resetPasswordFormHeader} inputs={resetPasswordInputs} button={resetPasswordButton}
                        links={resetPasswordLinks}/>
    )
}
