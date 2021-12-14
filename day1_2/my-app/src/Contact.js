import './Contact.css';

export function Contact(props) {
    return <div className="contact-container">
        <h3 className="contact-heading">TEL</h3>
        <p>{props.data.phone}</p>
        <h3 className="contact-heading">ADRES</h3>
        <p>{props.data.address.street} {props.data.address.number} {props.data.address.city}</p>
        <h3 className="contact-heading">EMAIL</h3>
        <p>{props.data.email}</p>
    </div>
}