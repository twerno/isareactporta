import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

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
        <Typography variant="h5">Witam w grze {name}!</Typography>
        <Typography variant="h6">
            Twoje punkty to:
            <span style={{ color: points < 0 ? 'red' : 'inherit'}}> {points}</span>
        </Typography>
        <div>
            <Button variant="contained" onClick={increase}>
                <Icon>add</Icon>
            </Button>
            <Button variant="contained" color="error" onClick={decrease}>
                <Icon>remove</Icon>
            </Button>
        </div>
    </>
}