import {ChangeEvent, FC, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from "styled-components";
import {BurgerData} from "../../../../common/types";
import {addBurger} from "../../../../services/add-burger";

interface Props {
    onAdd: () => void
}

const AddFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

export const AddForm: FC<Props> = ({ onAdd }) => {
    const [formData, setFormData] = useState<BurgerData>({
        name: '',
        ingredients: '',
        price: 0,
        url: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBurger(formData).then(() => {
            onAdd();
        })
    }

    const {name, ingredients, price, url} = formData;
    return <AddFormContainer onSubmit={handleSubmit}>
        <TextField sx={{marginBottom: '10px'}} label="Name" type="text" name="name" value={name}
                   onChange={handleChange}/>
        <TextField sx={{marginBottom: '10px'}} label="Ingredients" type="text" name="ingredients" value={ingredients}
                   onChange={handleChange}/>
        <TextField sx={{marginBottom: '10px'}} label="Price" type="number" name="price" value={price}
                   onChange={handleChange}/>
        <TextField sx={{marginBottom: '10px'}} label="Url" type="text" name="url" value={url} onChange={handleChange}/>
        <Button type="submit">Submit</Button>
    </AddFormContainer>
}