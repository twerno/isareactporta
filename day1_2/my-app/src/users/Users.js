import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import {User} from "./User";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(data => {
                setUsers(data);
            })
    }, []);

    return <>
        <Button onClick={() => navigate(-1)}>Go back</Button>
        <Table>
            <TableBody>
                {users.map(user => {
                    return <User key={user.id} user={user}/>
                })}
            </TableBody>
        </Table>
    </>
}