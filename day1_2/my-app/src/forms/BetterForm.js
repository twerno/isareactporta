import {useState} from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

export const BetterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'male',
        comment: ''
    });

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify({
            name, age, gender, comment
        }, null, 2))
    }

    const { name, age, gender, comment} = formData;

    return (
        <FormContainer onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleChange} />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" value={age} onChange={handleChange} />
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={gender} onChange={handleChange}>
                <option>male</option>
                <option>female</option>
            </select>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" name="comment" value={comment} onChange={handleChange}/>
            <input type="submit" value="Send" />
        </FormContainer>
    )
}