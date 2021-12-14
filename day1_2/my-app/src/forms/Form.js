import {useState} from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Form = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('male');
    const [comment, setComment] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);
    const handleGenderChange = (event) => setGender(event.target.value);
    const handleCommentChange = (event) => setComment(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify({
            name, age, gender, comment
        }, null, 2))
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={handleNameChange} />
            <label htmlFor="age">Age</label>
            <input type="number" id="age" value={age} onChange={handleAgeChange} />
            <label htmlFor="gender">Gender</label>
            <select id="gender" value={gender} onChange={handleGenderChange}>
                <option>male</option>
                <option>female</option>
            </select>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" value={comment} onChange={handleCommentChange}/>
            <input type="submit" value="Send" />
        </FormContainer>
    )
}