import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Link} from 'react-router-dom'

const navigation = () => {
    return (
        <List component="nav" className="nav">
            <ListItem button>
            <Link to="/admin/dashboard/home"><ListItemText primary="Home"/></Link>
            </ListItem>
            <Divider/>
            <ListItem button>
                <Link to="/admin/dashboard/add"><ListItemText primary="Add Product"/></Link>
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
