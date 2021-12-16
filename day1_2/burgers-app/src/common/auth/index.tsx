import {FC} from 'react';
import {Link} from 'react-router-dom';
import {useUserContext} from "../../services/user-context";
import {PageWrapper} from "../page-wrapper";

export const Auth: FC = ({children}) => {
    const user = useUserContext();

    return user
        ? <>{children}</>
        : <PageWrapper title="Unauthorized">
            <h1>Please <Link to="/sign-in">sign in</Link>.</h1>
        </PageWrapper>
}