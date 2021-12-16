import {Navigation} from './navigation';
import {Content} from './content';
import {UserContextProvider} from "./services/user-context";

function App() {
    return (
        <UserContextProvider>
            <Navigation/>
            <Content/>
        </UserContextProvider>
    );
}

export default App;
