import {createContext, useEffect, useState, useContext, FC} from "react";
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'

const UserContext = createContext<User | null>(null);

export const UserContextProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser)
        })
    }, []);

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);