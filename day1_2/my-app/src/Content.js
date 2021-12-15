import {Route, Switch} from "react-router-dom";
import {AboutMe} from "./about-me/AboutMe";
import {Game, GameClass} from "./games";
import {BetterForm, BoostedForm, Form} from "./forms";
import {Users} from "./users/Users";
import {Wrapper} from "./Wrapper";

export const Content = () => {
    return <Wrapper>
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
}