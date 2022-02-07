import React from 'react';
import '../NavBar/Nav.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Nav() {
  return <div className='nav'>
      <ul>
          <li><MenuOutlinedIcon /> All</li>
          <li>Amazon Pay</li>
          <li>Gift Cards</li>
          <li>Buy Again</li>
          <li>Gift Ideas</li>
          <li>Health, Household &amp; Persinal Care</li>
          <li>Kindle eBooks</li>
          <li>Home Improvement</li>
          <li>AmazonBasics</li>
          <li>Sports, Fitness &amp; Outdoors</li>
          <li>Toys &amp; Games</li>
          <li>Book</li>
          <li>Baby</li>
          <li>Pet Supplies</li>
          
      </ul>
  </div>;
}

export default Nav;
