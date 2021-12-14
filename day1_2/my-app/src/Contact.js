import './Contact.css';

export function Contact(props) {
    const { data: { phone, address, email } } = props;

    return <div className="contact-container">
        <h3 className="contact-heading">TEL</h3>
        <p>{phone}</p>
        <h3 className="contact-heading">ADRES</h3>
        <p>{address.street} {address.number} {address.city}</p>
        <h3 className="contact-heading">EMAIL</h3>
        <p>{email}</p>
    </div>
}