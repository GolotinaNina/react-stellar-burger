import React from "react";
import { navigateButton, Inputs, Links } from "../utils/inputs/inputs";
import { FormContainerOther } from "../components/FormContainer/FormContainer";
import { useAppDispatch, useAppSelector } from "../services/store";
import {
  selectedEmail,
  selectedPassword,
  selectedUserName,
} from "../services/selectors/inputsSelectors";
import { register } from "../utils/api";

export function Reg() {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectedEmail);
  const name = useAppSelector(selectedUserName);
  const password = useAppSelector(selectedPassword);

  function onClick() {
    dispatch(register(name, password, email));
  }

  const registerFormHeader = "Регистрация";
  const registerInputs = [Inputs.name, Inputs.email, Inputs.password];
  const registerButton = navigateButton({
    onClick: onClick,
    label: "Зарегистрироваться",
  });
  const registerFooterLinks = [Links.alreadyRegistered];

  return (
    <FormContainerOther
      header={registerFormHeader}
      inputs={registerInputs}
      button={registerButton}
      links={registerFooterLinks}
    />
  );
}
