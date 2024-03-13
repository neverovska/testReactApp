import React from "react";
import {useTranslation} from "react-i18next";

export const LanguageSelector = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        localStorage.setItem('selectedLang', event.target.value);
    }

    return (
        <select className="select-lang" onChange={changeLanguage} value={localStorage.getItem("selectedLang")}>
            <option value="En">En</option>
            <option value="Fr">Fr</option>
            <option value="Sp">Sp</option>
        </select>
    )
}