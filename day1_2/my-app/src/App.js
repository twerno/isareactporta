import {createContext, useState} from 'react';
import Navigation from './Navigation';
import {Content} from "./Content";

export const LanguageContext = createContext('pl');

function App() {
    const [lang, setLang] = useState('pl');

    return (
        <LanguageContext.Provider value={lang}>
            <Navigation setLang={setLang}/>
            <Content />
        </LanguageContext.Provider>
    );
}

export default App;
