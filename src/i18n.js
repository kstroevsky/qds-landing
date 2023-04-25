import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    // connect backend to i18next
    .use(Backend)
    // Автоматическое определение языка
    .use(LanguageDetector)
    // модуль инициализации
    .use (initReactI18next)
    .init({
        // Поддерживаемые языки:
        supportedLngs: ['en','ua'],
        // Стандартный язык
        fallbackLng: 'ua',
        debug: true,
        // Распознавание и кэширование языковых кук
        detection: {
            order: ['localStorage', 'queryString', 'cookie'],
            cache: ['localStorage']
        },
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false //   <---- this will do the magic
        }
        // ,
        // backend: {
        //     loadPath: '../locales/{{lng}}/translation.json',
        // }
    })

export default i18n;