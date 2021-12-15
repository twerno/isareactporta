import {useFormik} from 'formik';
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

export const BoostedForm = () => {
    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            name: '',
            age: '',
            gender: 'male',
            comment: ''
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
        validate: (values) => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Required';
            }

            return errors;
        }
    });

    return <FormContainer onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={values.name} onChange={handleChange} />
        {errors.name && <span style={{ color: 'red'}}>This field is required</span>}
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" value={values.age} onChange={handleChange} />
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={values.gender} onChange={handleChange}>
            <option>male</option>
            <option>female</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" name="comment" value={values.comment} onChange={handleChange}/>
        <input type="submit" value="Send" />
    </FormContainer>
}