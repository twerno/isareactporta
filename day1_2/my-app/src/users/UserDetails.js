import {useParams} from 'react-router-dom';

export const UserDetails = () => {
    const params = useParams();

    return <h1>Witaj użytkowniku o id: {params.id}</h1>
}