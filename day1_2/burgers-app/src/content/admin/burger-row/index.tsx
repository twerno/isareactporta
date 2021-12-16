import {FC} from "react";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import TableRow from "@mui/material/TableRow";
import {Burger} from "../../../common/types";
import {removeBurger} from "../../../services/remove-burger";

interface Props {
    burger: Burger,
    onRemove: () => void
}

export const BurgerRow: FC<Props> = ({ burger, onRemove }) => {
    const handleRemoveClick = () => {
        removeBurger(burger.id)
            .then(() => onRemove())
    }

    return (
        <TableRow key={burger.id}>
            <TableCell>{burger.name}</TableCell>
            <TableCell align="right">{burger.ingredients}</TableCell>
            <TableCell align="right">{burger.price}</TableCell>
            <TableCell width="50px">
                <Button variant="contained" color="error" size="small" onClick={handleRemoveClick}>
                    <Icon>remove</Icon>
                </Button>
            </TableCell>
        </TableRow>
    )
}