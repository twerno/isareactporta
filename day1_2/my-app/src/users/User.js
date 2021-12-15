import {Link} from 'react-router-dom';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const User = ({ user }) => {
    const generatePhoneNumber = () => {
        const prefix = user.phone.slice(0, user.phone.indexOf(')') + 1);
        return <span>
            <i>{prefix}</i>
            {prefix ? user.phone.slice(user.phone.indexOf(')') + 1) : user.phone}
        </span>
    }

    return <TableRow>
        <TableCell><Link to={`/users/${user.id}`}>{user.name}</Link> works in {user.company.name}</TableCell>
        <TableCell>{generatePhoneNumber()}</TableCell>
    </TableRow>
}