import MyName from './MyName';
import { Contact } from './Contact';
import { Wrapper } from './Wrapper';

function App() {
    return (
        <Wrapper>
            <MyName name="Janusz" surname="Kowalski"/>
            <MyName name="Janusz"/>
            <Contact data={{
                phone: '111 222 333',
                address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 },
                email: 'moj@mail.com'
            }}/>
        </Wrapper>
    );
}

export default App;
