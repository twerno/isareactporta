import {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import {Game, GameClass} from "./games";
import {BetterForm, BoostedForm, Form} from "./forms";
import {Users} from "./users/Users";
import {UserDetails} from "./users/UserDetails";
import {Sign} from "./sign/Sign";
import {Wrapper} from "./Wrapper";
import CircularProgress from '@mui/material/CircularProgress';

const AboutMeLazy = lazy(() => import("./about-me/AboutMe")
    .then((module) => ({default: module.AboutMe})));

export const Content = () => {
    return <Wrapper>
        <Suspense fallback={<CircularProgress/>}>
            <Switch>
                <Route exact path="/">
                    <h1>Witaj na naszej stronie!</h1>
                </Route>
                <Route path="/about-me">
                    <AboutMeLazy/>
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
                <Route exact path="/users">
                    <Users/>
                </Route>
                <Route path="/users/:id">
                    <UserDetails/>
                </Route>
                <Route path="/sign">
                    <Sign/>
                </Route>
            </Switch>
        </Suspense>
    </Wrapper>
}