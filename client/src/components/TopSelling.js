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
  console.log(typeof data)
  console.log(data)

  return (
    <div className='item'>
      <h1>Top Selling</h1>
      <div className='cards__container'>
            {data.map((item, index) => (
              if (index === 1) {
                return "<div className='cards__wrapper'>";
              }
                <ul className='cards__items'>
                <CardItemTop
                  src={item.src}
                  text={item.text}
                  label={item.label}
                  path={item.path}
                  price={item.price}
                />
                </ul>
              </div>
            ))}
      </div>
    </div>
  );
}
export default TopSelling;