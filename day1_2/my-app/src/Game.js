import { useState } from 'react';

export const Game = ({ name }) => {
    const [points, setPoints] = useState(0);

    return <>
        <h3>Witam w grze {name}!</h3>
        <h4>Twoje punkty to: {points}</h4>
    </>
}