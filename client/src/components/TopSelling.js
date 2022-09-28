import React from 'react';
import './TopSelling.css';
import CardItemTop from './CardItemTop';
// import {SliderTwo as Slider} from "./slider";

function TopSelling() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/topselling")
      .then((res) => res.json())
      .then((data) => {
        const datas = JSON.parse(data);
        setData(datas)
      });
  }, []);

  // const itemTop = data.map((item, index) => {
  //   const show_div = `${(index === 0) ? `<div className='cards__wrapper'>` : ''}`;
  //   const show_div2 = `${(index === 3) ? `</ul></div><div className='cards__wrapper cards__wrapper__top'>` : ''}`;
  //   const show_ul = `${(index === 3 || index === 0) ? `<ul className='cards__items'>` : ''}`;
  //   const show_ul_3 = `${(index === 5) ? `</ul></div>` : ''}`;
  //   return (
  //     show_div +
  //     show_div2 +
  //     show_ul +
  //     getItem(item) +
  //     show_ul_3
  //   );
  // });

  return (
    <div className='item'>
      <h1>Top Selling</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {
            data.map((item, index) => (
              <CardItemTop
                src = { item.src }
                text = { item.text }
                label = { item.label }
                path = { item.path }
                price = { item.price }
              />
            ))
          }
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TopSelling;