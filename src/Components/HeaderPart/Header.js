import React from 'react';
import '../HeaderPart/Header.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return <div className='header'>
      <div className='head_left'>
          <div>
              <img className='logo' src='logo.png' alt='img' />
          </div>
          <div className='head_left_option'>
              <div>
                  <LocationOnOutlinedIcon />
              </div>
              <div className='head_option'>
                <span className='line'>Hello</span>
                <span className='line2'>Select your address</span>
              </div>
          </div>
          
      </div>
      <form className='head_mid'>
          <div>
          <select id="categories" name="categories">
            <option value=" ">All</option>
            <option value=" ">All Categories</option>
            <option value=" ">Alexa Skills</option>
            <option value=" ">Amazon Device</option>
            <option value=" ">Amazon Fashion</option>
            <option value=" ">Appliences</option>
            <option value=" ">Baby</option>
            <option value=" ">Beauty</option>
            <option value=" ">Books</option>
            <option value=" ">Clothing &amp; Accessories</option>
            <option value=" ">Computer &amp; Accessories</option>
            <option value=" ">Deals</option>
            <option value=" ">Electronics</option>
            <option value=" ">Furniture</option>
            <option value=" ">Gift Card</option>
            <option value=" ">Grocery &amp; Gourmet Foods</option>
            <option value=" ">Under 500</option>
            <option value=" ">Watches</option>
          </select>
          </div>
          <div>
              <input className='input' type="text" ></input>
          </div>
          <div className='input_search'>
              <SearchOutlinedIcon />
          </div>
      </form>
      <div className='head_right'>
          
          <div className='head_option'>
              <span className='line1'>Hello, Sign in</span>
              <span className='line2'>Account &amp; List</span>
          </div>
          <div className='head_option'>
              <span className='line1'>Returns</span>
              <span className='line2'>&amp; Orders</span>
          </div>
          <div className='head_option_right'>
              <div><ShoppingCartOutlinedIcon /></div>
              <span className='line2'>Cart</span>
          </div>
      </div>
  </div>;
}

export default Header;
