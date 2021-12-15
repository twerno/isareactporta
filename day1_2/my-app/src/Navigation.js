import {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import LanguageContext from "./LanguageContext";

export default function Navigation() {
    const { setLang } = useContext(LanguageContext);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Icon>favorite</Icon>
                    </IconButton>
                    <Button color="inherit" component={NavLink} activeClassName="active-nav-link" exact
                            to="/">Home</Button>
                    <Button color="inherit" component={NavLink} activeClassName="active-nav-link" to="/about-me">About
                        me</Button>
                    <Button color="inherit" component={NavLink} activeClassName="active-nav-link"
                            to="/games">Games</Button>
                    <Button color="inherit" component={NavLink} activeClassName="active-nav-link"
                            to="/forms">Forms</Button>
                    <Button color="inherit" component={NavLink} activeClassName="active-nav-link"
                            to="/users">Users</Button>
                    <Button color="inherit" onClick={() => setLang('pl')}>PL</Button>
                    <Button color="inherit" onClick={() => setLang('en')}>EN</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}