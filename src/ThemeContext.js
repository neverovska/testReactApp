import React, {createContext, useState, useContext, useEffect} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {

    const preference = localStorage.getItem("theme") != null ?
        localStorage.getItem("theme") == "dark" :
        window.matchMedia("(prefers-color-scheme:dark)").matches;
    const [isDarkMode, setIsDarkMode] = useState(preference);

    const changeTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = isDarkMode ? "dark" : "light";

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem('theme', theme);
    }, [isDarkMode]);

    return (
        // Предоставление доступа к данным контекста дочерним компонентам
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

