import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Game } from './Game';
import { Users } from './Users';
import { GameClass } from "./GameClass";

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
