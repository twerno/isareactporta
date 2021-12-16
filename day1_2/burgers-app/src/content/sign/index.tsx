import {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {PageWrapper} from "../../common/page-wrapper";

interface SignFormState {
    email: string;
    password: string;
}

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Sign = () => {
    const [formData, setFormData] = useState<SignFormState>({
        email: '',
        password: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, formData.email, formData.password);
    }

    const {email, password} = formData;

    return <PageWrapper title="Sign">
        <FormContainer onSubmit={handleSubmit}>
                <TextField sx={{marginBottom: '10px'}} label="Email" type="email" name="email" value={email}
                           onChange={handleChange}/>
                <TextField sx={{marginBottom: '10px'}} label="Password" type="password" name="password" value={password}
                           onChange={handleChange}/>
                <Button type="submit">Log in</Button>
            </FormContainer>
    </PageWrapper>
}
