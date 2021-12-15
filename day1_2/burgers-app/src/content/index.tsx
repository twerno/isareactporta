import { Routes, Route } from 'react-router-dom';
import { Burgers } from "./burgers";
import { Admin } from "./admin";
import { Sign } from "./sign";
import { Welcome } from "./welcome";

export const Content = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/burgers" element={<Burgers />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/sign-in" element={<Sign />} />
        </Routes>
    )
}