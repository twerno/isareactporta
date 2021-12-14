import MyName from "./MyName";
import {Contact} from "./Contact";
import {MyFavouriteDishes} from "./MyFavouriteDishes";

export const AboutMe = () => {
    return (
        <>
            <MyName name="Janusz" surname="Kowalski"/>
            <MyName name="Janusz"/>
            <Contact data={{
                phone: '111 222 333',
                address: {street: 'Słowackiego', city: 'Gdańsk', number: 37},
                email: 'moj@mail.com'
            }}/>
            <MyFavouriteDishes dishes={[
                {id: 1, name: 'Chilli con carne'},
                {id: 2, name: 'Boiling water'},
                {id: 3, name: 'Bigos'},
            ]}/>
        </>
    )
}