import {useState, useEffect} from 'react';

export const Game = ({name}) => {
    const [points, setPoints] = useState(0);

    const increase = () => {
        setPoints(points + 5);
    }

    const decrease = () => {
        setPoints(points - 5);
    }

    useEffect(() => {
        if (points >= 50) {
            alert('Gratulacje wygrałeś w grę ' + name + '!');
            setPoints(0);
        }
    })

    return <>
        <h3>Witam w grze {name}!</h3>
        <h4>
            Twoje punkty to:
            <span style={{ color: points < 0 ? 'red' : 'inherit'}}> {points}</span>
        </h4>
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    </>
}