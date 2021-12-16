import {FC} from "react";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import TableRow from "@mui/material/TableRow";
import {Burger} from "../../../common/types";
import {removeBurger} from "../../../services/remove-burger";

interface Props {
    burger: Burger,
    onRemove: () => void,
    onEdit: (editId: string) => void
}

export const BurgerRow: FC<Props> = ({ burger, onRemove, onEdit }) => {
    const handleRemoveClick = () => {
        removeBurger(burger.id)
            .then(() => onRemove())
    }

    const handleEditClick = () => {
        onEdit(burger.id);
    }

    return (
        <TableRow key={burger.id}>
            <TableCell>{burger.name}</TableCell>
            <TableCell align="right">{burger.ingredients}</TableCell>
            <TableCell align="right">{burger.price}</TableCell>
            <TableCell width="50px">
                <Button variant="contained" color="primary" size="small" onClick={handleEditClick}>
                    <Icon>edit</Icon>
                </Button>
            </TableCell>
            <TableCell width="50px">
                <Button variant="contained" color="error" size="small" onClick={handleRemoveClick}>
                    <Icon>remove</Icon>
                </Button>
            </TableCell>
        </TableRow>
    )
}