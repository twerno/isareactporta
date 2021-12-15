import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Users } from './users/Users';
import { Game, GameClass } from "./games";
import {Form, BetterForm, BoostedForm} from "./forms";

function App() {
    return (
        <Wrapper>
            <Form />
            <BetterForm />
            <BoostedForm />.
            <AboutMe />
            <Game name="Witcher 3" />
            <GameClass name="Diablo 2"/>
            <Users />
        </Wrapper>
    );
}

export default App;
