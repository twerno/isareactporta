import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

export const Navigation = () => {
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
                    <Button color="inherit" component={Link} to="/admin">Admin</Button>
                    <Button color="inherit" component={Link} to="/sign-in">Sign</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}