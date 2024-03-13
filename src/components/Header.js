import React from "react";
import "../styles/Header.css";
import {LanguageSelector} from "./LanguageSelector";
import {ThemeToggle} from "./ThemeToggle";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <span className="logo">test shop</span>
                <nav className="settings">
                    <ThemeToggle/>
                    <LanguageSelector/>
                </nav>
            </div>
        </header>
    )
}
