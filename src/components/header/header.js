import React from 'react'

import {Link} from 'react-router-dom'
import './header.scss'
import Typography from '@material-ui/core/Typography';



const header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Typography variant="h5" >Company name</Typography>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/admin" className="option">
                    Admin
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>

            </div>
        </div>
    )
}

export default header
