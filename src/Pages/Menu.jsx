import React from 'react'
import {MenuList} from '../Helpers/MenuList.js'
import MenuItem from '../Components/MenuItem.jsx';
import '../Styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem, key) => {
                return <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price}/>;
            })}
        </div>
    </div>
  )
}

export default Menu