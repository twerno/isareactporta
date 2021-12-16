import {PageWrapper} from "../../common/page-wrapper";
import {useUserContext} from "../../services/user-context";

export const Welcome = () => {
    const user = useUserContext();

    return <PageWrapper title="Welcome">
        <h1>Hello {user ? user.email : 'strange'}!</h1>
    </PageWrapper>
}