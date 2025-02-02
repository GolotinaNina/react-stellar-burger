import React from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export function FormInputText({ placeholder }) {

  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);

  return (
    <Input
      type={"text"}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      name={"name"}
      error={false}
      ref={inputRef}
      errorText={"Ошибка"}
      size={"default"}
      extraClass="ml-1"
    />
  );
}

FormInputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
};