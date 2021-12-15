import {Redirect, useHistory} from 'react-router-dom';
import {useState} from 'react';

export const Sign = () => {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        setShouldRedirect(true);
        // Opcja z użyciem history :)
        // history.push('/')
    }

    if (shouldRedirect) {
        return <Redirect to="/" />
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <input type="submit" value="Send" />
    </form>
}