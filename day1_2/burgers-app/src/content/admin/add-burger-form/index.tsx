import {FC, useState} from 'react';
import styled from 'styled-components';
import Fab from '@mui/material/Fab';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Icon from '@mui/material/Icon';
import { AddForm } from './form';

interface Props {
    onAdd: () => void
}

const AddBurgerFormContainer = styled.div`
    margin-top: 30px;
    margin-right: 15%;
    align-self: flex-end;
`;

export const AddBurgerForm: FC<Props> = ({ onAdd }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleOnAdd = () => {
        onAdd();
        handleClose();
    }

    return <AddBurgerFormContainer>
        <Fab color="primary" onClick={handleOpen}>
            <Icon>add</Icon>
        </Fab>
        <Dialog onClose={handleClose} open={isOpen}>
            <DialogTitle>Add burger</DialogTitle>
            <AddForm onAdd={handleOnAdd} />
        </Dialog>
    </AddBurgerFormContainer>
}