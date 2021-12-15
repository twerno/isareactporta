import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';

export default function Navigation() {
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
                    >
                        <Icon>favorite</Icon>
                    </IconButton>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about-me">About me</Button>
                    <Button color="inherit" component={Link} to="/games">Games</Button>
                    <Button color="inherit" component={Link} to="/forms">Forms</Button>
                    <Button color="inherit" component={Link} to="/users">Users</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}