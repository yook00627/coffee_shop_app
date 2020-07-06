import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

import shopService from './services/shopService';

import Shop from './components/Shop';
import Popup from './components/Popup';

const App = () => {
  const [shops, setShops] = useState(null);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (!shops) {
      getShops();
    }
  })

  const getShops = async () => {
    let res = await shopService.getAll();
    setShops(res);
  }

  //found issue where if both are selected and deselt the other it doesn't re-render the output
  async function filter() {
    await getShops();
    let openedOnly = document.getElementById("openedOnly");
    let sortByName = document.getElementById("sortByName");
    if (openedOnly.checked === true && sortByName.checked === true) {
      let filteredShops = []
      for (const shop of shops) {
        if (shop.status) {
          filteredShops.push(shop);
        }
      }
      filteredShops.sort( compare );
      setShops(filteredShops);
    } else if (openedOnly.checked === true) {
      let filteredShops = []
      for (const shop of shops) {
        if (shop.status) {
          filteredShops.push(shop);
        }
      }
      setShops(filteredShops);
    } else if (sortByName.checked === true) {
      let filteredShops = shops.slice();
      filteredShops.sort( compare );
      setShops(filteredShops);
    } else {
      await getShops();
    }
  }

  function compare( a, b ) {
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB)
        return -1 
    if (nameA > nameB)
        return 1
    return 0
  }

  function togglePopup() {
    setPopup(!popup);
  }

  return (
    <div className="App">
      <h1> Good Coffee is needed </h1>
      <div className="filter">
        <div className="filterCheckbox">
          <label htmlFor="sortByName">Sort by Name:</label> 
          <input type="checkbox" id="sortByName" onClick={filter} />
        </div>
        <div className="filterCheckbox">
          <label htmlFor="openedOnly">Opened only:</label> 
          <input type="checkbox" id="openedOnly" onClick={filter} />
        </div>
      </div>
      <div className="addNewShops">
        <h2>Adding New Shops</h2>
        <button onClick={togglePopup}>Add</button>
        {popup ? 
          <Popup
            closePopup={togglePopup} 
          /> : null
        }
      </div>
      <div className="shops">
        {(shops && shops.length > 0) ? (
          shops.map(shop => (
            <Shop
              key={shop._id}
              name={shop.name}
              menus={shop.menus}
            />
          ))
        ) : (
          <p>No product found</p>
        )}
      </div>
    </div>
  );
}

export default App;
