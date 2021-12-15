import {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import {useParams} from 'react-router-dom';

export const UserDetails = () => {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(r => r.json())
            .then(data => {
                setUserData(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading && !userData) {
        return <CircularProgress />
    }

    return <h1>Witaj {userData.name}!</h1>
}