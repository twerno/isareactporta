import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

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
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About me</Button>
                    <Button color="inherit">Games</Button>
                    <Button color="inherit">Forms</Button>
                    <Button color="inherit">Users</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}