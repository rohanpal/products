import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AdminNavigation from '../../components/admin/navigation/navigation'
import './dashboard.scss'


const dashboard = () => {
    return (
        <div className="root">
            <div className="display">

            </div>
            <div className="admin-navigation">
                <AdminNavigation/>
            </div>
            
        </div>
    )
}

export default dashboard
