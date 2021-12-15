import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import {User} from "./User";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(data => {
                setUsers(data);
            })
    }, []);

    return <>
        <Button onClick={history.goBack}>Go back</Button>
        <Table>
            {users.map(user => {
                return <User key={user.id} user={user}/>
            })}
        </Table>
    </>
}