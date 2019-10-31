import React from 'react'
import './displayItem.scss'
import CustomButton from '../customButton/customButton'

const displayItem = ({item:{name,price,imageUrl,id}}) => {
    return (
        <div className="display-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted>View Details</CustomButton>
        </div>
    )
}

export default displayItem
