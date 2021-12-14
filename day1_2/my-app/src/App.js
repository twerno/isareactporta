import { Wrapper } from './Wrapper';
import { AboutMe } from './about-me/AboutMe';
import { Game } from './Game';

function App() {
    return (
        <Wrapper>
            <AboutMe />
            <Game name="Witcher 3" />
        </Wrapper>
    );
}

export default App;
