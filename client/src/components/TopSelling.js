import React from 'react';
import './TopSelling.css';
import CardItemTop from './CardItemTop';
// import {SliderTwo as Slider} from "./slider";

function TopSelling() {
  return (
    <div className='item'>
      <h1>Top Selling</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItemTop
              src='images/img-1.jpg'
              text='Lorem ipsum dolor sit amet, in eleifend inimicus elaboraret his, harum efficiendi mel ne. Sale percipit vituperata'
              label='Áo thun nam'
              path='/products?id=500'
              price='$500.00'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TopSelling;