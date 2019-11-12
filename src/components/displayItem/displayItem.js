import React from 'react'
import './displayItem.scss'
import CustomButton from '../customButton/customButton'


const displayItem = ({codeNo,itemType,material,picture}) => {
    console.log(material)
    return (
        
        <div className="display-item">
            <div className="image" style={{backgroundImage:`url(${picture})`}}></div>
            <div className="footer">
                <span className="name">{itemType}</span>
                <span className="price">{material}</span>
            </div>
            <CustomButton inverted>View Details</CustomButton>
        </div>
    )
}

export default displayItem


// SIZE: "4.5"
// SNO: "1"
// codeNo: "1351"
// itemType: "DOOR KNOCKER"
// material: "IRON"
// picture: "https://firebasestorage.goog
