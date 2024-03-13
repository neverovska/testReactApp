import React from "react";
import "../styles/ThemeToggle.css";
import {useTheme} from "../ThemeContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export const ThemeToggle = () => {
    const {theme, changeTheme} = useTheme();

    const toggleMode = () => {
        changeTheme();
    };

    return (
        <div className="mode-switch">
            <FontAwesomeIcon icon={faSun} className="toggle-icon"/>
            <label>
                <input
                    type="checkbox"
                    onChange={toggleMode}
                    checked={theme === "dark"}
                />
                <span className="slider"></span>
            </label>
            <FontAwesomeIcon icon={faMoon} className="toggle-icon"/>
        </div>
    );
};

