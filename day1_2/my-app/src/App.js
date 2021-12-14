import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Users } from './users/Users';
import { Game, GameClass } from "./games";

function App() {
    return (
        <Wrapper>
            <AboutMe />
            <Game name="Witcher 3" />
            <GameClass name="Diablo 2"/>
            <Users />
        </Wrapper>
    );
}

export default App;
