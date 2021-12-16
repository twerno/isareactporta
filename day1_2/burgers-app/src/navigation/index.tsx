import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import {useUserContext} from "../services/user-context";
import {getAuth, signOut} from 'firebase/auth';

export const Navigation = () => {
    const user = useUserContext();

    const logOut = () => {
        const auth = getAuth();
        signOut(auth);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        component={Link}
                        to="/"
                    >
                        <Icon>lunch_dining</Icon>
                    </IconButton>
                    <Button color="inherit" component={Link} to="/burgers">Burgers</Button>
                    {
                        user && <Button color="inherit" component={Link} to="/admin">Admin</Button>
                    }
                    {
                        user
                            ? <Button color="inherit" onClick={logOut}>Sign out</Button>
                            : <Button color="inherit" component={Link} to="/sign-in">Sign in</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}