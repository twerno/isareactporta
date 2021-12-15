import {useContext} from 'react';
import {LanguageContext} from "../App";

function MyName(props) {
    const lang = useContext(LanguageContext);

    if (props.surname) {
        if (lang === 'pl') {
            return <h1>Moje imię to {props.name}, a nazwisko to {props.surname}!</h1>
        } else if (lang === 'en') {
            return <h1>My name is {props.name} and surname is {props.surname}!</h1>
        }
    }

    if (lang === 'pl') {
        return <h1>Moje imię to {props.name}!</h1>
    } else if (lang === 'en') {
        return <h1>My name is {props.name}!</h1>
    }
}

export default MyName;