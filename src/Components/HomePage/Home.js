import React from 'react';
import '../HomePage/Home.css';
import Product from '../Products/Product';


function Home() {
  return <div className='home'>
      <img className='home_img' src='abc.jpg' alt='img' />
      <Product />
  </div>;
}

export default Home;
