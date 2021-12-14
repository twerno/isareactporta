export const User = ({ user }) => {
    const generatePhoneNumber = () => {
        const prefix = user.phone.slice(0, user.phone.indexOf(')') + 1);
        return <span>
            <i>{prefix}</i>
            {prefix ? user.phone.slice(user.phone.indexOf(')') + 1) : user.phone}
        </span>
    }

    return <li>
        {user.name} works in {user.company.name} <br />
        {generatePhoneNumber()}
    </li>
}