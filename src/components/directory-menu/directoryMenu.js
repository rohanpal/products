import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item'
import './directoryMenu.scss'


 class directoryMenu extends Component {

    state={
        categories:[{
            title:"category1",
            id:1,
            imageUrl:"http://www.technomedsystems.in/img/slide-bg02.jpg"

           
        },
        {
            title:"category2",
            id:2,
            imageUrl:"http://www.technomedsystems.in/img/slide-bg02.jpg"

           
        },{
            title:"category3",
            id:3,
            imageUrl:"http://www.technomedsystems.in/img/slide-bg02.jpg"

           
        },{
            title:"category4",
            id:4,
            imageUrl:"http://www.technomedsystems.in/img/slide-bg02.jpg",
            size:"large"

           
        },{
            title:"category5",
            id:5,
            imageUrl:"http://www.technomedsystems.in/img/slide-bg02.jpg",
            size:"large"

           
        }]
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.categories.map(category=><MenuItem key={category.id} {...category}/>)}
            </div>
        )
    }
}
export default directoryMenu
