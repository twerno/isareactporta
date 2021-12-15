import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Icon from "@mui/material/Icon";

export const MyFavouriteDishes = (props) => {
    return <List>
        {props.dishes.map(dish => {
            return <ListItem key={dish.id}>
                <ListItemAvatar>
                    <Avatar>
                        <Icon>thumb_up</Icon>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText>{dish.name}</ListItemText>
            </ListItem>
        })}
    </List>
}