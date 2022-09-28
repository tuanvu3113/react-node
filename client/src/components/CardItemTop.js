import React from 'react';
import { Link } from 'react-router-dom';

function CardItemTop(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <input type="image" img="true" src={props.src} alt="Travel Image" className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='cards__item__text'>Price: {props.price}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}
export default CardItemTop;