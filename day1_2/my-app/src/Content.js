import {lazy, Suspense} from 'react';
import {Routes, Route} from "react-router-dom";
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
            <Routes>
                <Route path="/" element={<h1>Witaj na naszej stronie!</h1>}/>
                <Route path="/about-me" element={<AboutMeLazy/>}/>
                <Route path="/games" element={<>
                    <Game name="Witcher 3"/>
                    <GameClass name="Diablo 2"/>
                </>}/>
                <Route path="/forms" element={<>
                    <Form/>
                    <BetterForm/>
                    <BoostedForm/>
                </>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/:id" element={<UserDetails/>}/>
                <Route path="/sign" element={<Sign/>}/>
            </Routes>
        </Suspense>
    </Wrapper>
}