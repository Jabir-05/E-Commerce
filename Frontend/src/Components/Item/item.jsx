import React from 'react'
import "./item.css"

const item =(props)=> {
  return (
    <div className='item'>
    <img src={props.image} alt="" />
    <p>{props.name}</p>
    <div className="item-prices">
        <div className="item-price-new">
            {props.new_price}
        </div>
        <div className="item-price-old">
            {props.new_old}
        </div>
    </div>
    </div>
  );
};
export default item;