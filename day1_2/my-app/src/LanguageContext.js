import {useState, createContext} from 'react';

const LanguageContext = createContext('pl');

export const LanguageContextProvider = ({ children }) => {
    const [lang, setLang] = useState('pl');

    return <LanguageContext.Provider value={{lang, setLang}}>
        {children}
    </LanguageContext.Provider>
}

export default LanguageContext;