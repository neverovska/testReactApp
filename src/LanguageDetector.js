import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "En", // Язык по умолчанию в случае отсутствия перевода
        resources: {
            En: {
                translation: {
                    h: "Our products"
                }

            },
            Fr: {
                translation: {
                    h: "Nos produits"
                }
            },
            Sp: {
                translation: {
                    h: "Nuestros productos"
                }
            }
        }
    })