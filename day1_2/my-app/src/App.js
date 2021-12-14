import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Game } from './Game';
import { Users } from './Users';

function App() {
    return (
        <Wrapper>
            <AboutMe />
            <Game name="Witcher 3" />
            <Users />
        </Wrapper>
    );
}

export default App;
