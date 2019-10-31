import React from 'react'
import {ReactComponent as Logo} from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import './header.scss'


const header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    Shop
                </Link>
                <Link to="/contact" className="option">
                    Contact
                </Link>

            </div>
        </div>
    )
}

export default header
