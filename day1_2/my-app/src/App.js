import {Switch, Route} from 'react-router-dom';
import {Wrapper} from './Wrapper';
import {AboutMe} from './about-me/AboutMe';
import {Users} from './users/Users';
import {Game, GameClass} from "./games";
import {Form, BetterForm, BoostedForm} from "./forms";
import Navigation from './Navigation';

function App() {
    return (
        <>
            <Navigation/>
            <Wrapper>
                <Switch>
                    <Route exact path="/">
                        <h1>Witaj na naszej stronie!</h1>
                    </Route>
                    <Route path="/about-me">
                        <AboutMe/>
                    </Route>
                    <Route path="/games">
                        <Game name="Witcher 3"/>
                        <GameClass name="Diablo 2"/>
                    </Route>
                    <Route path="/forms">
                        <Form/>
                        <BetterForm/>
                        <BoostedForm/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                </Switch>
            </Wrapper>
        </>
    );
}

export default App;
