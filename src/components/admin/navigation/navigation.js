import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const navigation = () => {
    return (
        <List component="nav" className="nav">
            <ListItem button>
                <ListItemText primary="Acount"/>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText primary="Acount"/>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText primary="Acount"/>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText primary="Acount"/>
            </ListItem>
            <Divider/>
            <ListItem button>
                <ListItemText primary="Acount"/>
            </ListItem>
            <Divider/>
            
        </List>
    )
}

export default navigation
