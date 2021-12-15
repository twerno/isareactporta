import Navigation from './Navigation';
import {Content} from "./Content";
import {LanguageContextProvider} from "./LanguageContext";

function App() {
    return (
        <LanguageContextProvider>
            <Navigation/>
            <Content />
        </LanguageContextProvider>
    );
}

export default App;
