import React from "react";
import { FormControl, RememberMeContainer } from "./Connexion.styled";
import { TOKEN_STORAGE_NAME } from "../../config/constantes";
import { useParams } from "react-router-dom";

const RememberMe = () => {
  const { faction } = useParams();

  const handleCheckedRememberMe = (e) => {
    let target = e.target;
    const checked = target.checked;
    if (checked)
      localStorage.setItem(`${TOKEN_STORAGE_NAME}-remember-me`, true);
    else localStorage.removeItem(`${TOKEN_STORAGE_NAME}-remember-me`);
  };

  const isRememberMe = localStorage.getItem(
    `${TOKEN_STORAGE_NAME}-remember-me`
  );

  return (
    <FormControl>
      <RememberMeContainer>
        <input
          type="checkbox"
          id="
remember_me"
          onChange={handleCheckedRememberMe}
          defaultChecked={isRememberMe ? true : false}
        />
        <label
          htmlFor="
remember_me"
        >
          Se souvenire de moi
        </label>
      </RememberMeContainer>
    </FormControl>
  );
};

export default RememberMe;
