import React, { FC } from 'react';
import { ICard } from '../../interface/interface';
import Prise from '../../../../shared/ui/prise';
import Rating from '../../../../shared/ui/rating';
import './style.scss';
import BuyProduct from '../../../../features/buy-product';

const Card:FC<ICard> = ({ data }) => {
  const { name, discount, rating, img, prise, discountPrise } = data;
  
  return (
    <div className="wrapper custom-card">
      <div className="img">
        <img src={img} alt="product-img" />
      </div>
      <div>
        <div className="d-flex justify-content-between mb-4">
          <h5 className="mb-0">{name}</h5>
          <Prise discount={discount} prise={prise} discountPrise={discountPrise}/>
        </div>
        <div className="d-flex justify-content-between">
          <Rating rating={rating} />
          <BuyProduct product={data}/>
        </div>
      </div>
    </div>
  );
};

export default Card;