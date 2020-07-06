import React from 'react';
import './Popup.css';

import shopService from '../services/shopService';

const Popup = ({closePopup}) => {

  async function handleSubmit() {
    let data = {
      "name": document.getElementById("name").value,
      "menus": document.getElementById("menus").value.split(","),
      "status": document.getElementById("status").checked,
    }

    let res = await shopService.postShop(data);
    console.log(res);
  }

  return (
    <div className='popup'>
      <div className='popup_inner'>
        <button onClick={closePopup}>close me</button>
        <h1>Adding new Shop</h1>
        <form className="addingShop" onSubmit={handleSubmit}>
          <label>Shop Name:</label>
          <input id="name" name="name" type="text" />
          <br />
          <label>Menus(seperated by commas):</label>
          <input id="menus" name="menus" type="text" />
          <br />
          <label>Status of Shop:</label>
          <input id="status" name="status" type="checkbox" defaultChecked />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}


export default Popup;