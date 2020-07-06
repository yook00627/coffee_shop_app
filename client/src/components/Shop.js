import React from 'react';

const Shop = ({name, menus}) => {
  return (
    <div className="shop">
      <h1>{name}</h1>
      <h3>Menu:</h3>
      <ul>
        {menus.map(menu => (
          <li key={name+"."+menu}>
            {menu}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Shop;