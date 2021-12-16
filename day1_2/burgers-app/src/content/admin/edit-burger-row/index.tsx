import {ChangeEvent, FC, useState} from "react";
import TextField from "@mui/material/TextField";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import TableRow from "@mui/material/TableRow";
import {BurgerData, Burger} from "../../../common/types";
import {editBurger} from "../../../services/edit-burger";

interface Props {
    burger: Burger,
    onCancel: () => void,
    onSave: () => void
}

export const EditBurgerRow: FC<Props> = ({burger, onSave, onCancel}) => {
    const [formData, setFormData] = useState<BurgerData>({
        name: burger.name,
        ingredients: burger.ingredients,
        price: burger.price
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSaveClick = () => {
        editBurger(burger.id, formData)
            .then(() => onSave())
    }

    const {name, ingredients, price} = formData;

    return (
        <TableRow key={burger.id}>
            <TableCell>
                <TextField label="Name" type="text" name="name" value={name} onChange={handleChange}/>
            </TableCell>
            <TableCell align="right">
                <TextField label="Ingredients" type="text" name="ingredients" value={ingredients}
                           onChange={handleChange}/>
            </TableCell>
            <TableCell align="right">
                <TextField label="Price" type="number" name="price" value={price} onChange={handleChange}/>
            </TableCell>
            <TableCell width="50px">
                <Button variant="contained" color="success" size="small" onClick={handleSaveClick}>
                    <Icon>save</Icon>
                </Button>
            </TableCell>
            <TableCell width="50px">
                <Button variant="contained" color="secondary" size="small" onClick={onCancel}>
                    <Icon>cancel</Icon>
                </Button>
            </TableCell>
        </TableRow>
    )
}