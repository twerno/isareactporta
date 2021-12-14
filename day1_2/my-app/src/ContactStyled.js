import styled from 'styled-components';

const SectionHeading = styled.h3`
    color: orange;
    margin: 0 0 10px 0;
    font-size: 14px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionText = styled.p`
    margin-top: 0;
    margin-bottom: 10px;
`;

export const ContactStyled = ({ data: { phone, address, email } }) => {
    const sendData = () => {
        alert(`Dziękuję! Zapraszam do mnie przy ${address.street} ${address.number} ${address.city}!`)
    }

    return <Container>
        <SectionHeading>TEL</SectionHeading>
        <SectionText>{phone}</SectionText>
        <SectionHeading>ADRES</SectionHeading>
        <SectionText>{address.street} {address.number} {address.city}</SectionText>
        <SectionHeading>EMAIL</SectionHeading>
        <SectionText>{email}</SectionText>
        <button onClick={sendData}>Wyślij</button>
    </Container>
}