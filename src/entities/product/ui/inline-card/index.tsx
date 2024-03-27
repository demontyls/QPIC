import React, { FC } from 'react';
import Prise from '../../../../shared/ui/prise';
import { IProduct } from '../../interface/interface';
import { ChangeQuantity } from '../../../../features';
import DeleteProduct from '../../../../features/delete-product/index.ui';
import './style.scss';

interface IInlineCard {
  data:IProduct;
}
const InlineCard:FC<IInlineCard> = ({data}) => {
  const { name, discount, img, prise, discountPrise } = data;
  
  return (
    <div className="wrapper inline-card">
      <div>
        <div className="img">
          <img src={img} alt="product-img" />
        </div>
        <div>
         <ChangeQuantity data={data}/>
        </div>
      </div>
      <div className="inline-card__info">
          <h5>{name}</h5>
          <Prise discount={discount} prise={prise} discountPrise={discountPrise} />
      </div>
      <div className="d-flex flex-column justify-content-between ms-auto">
          <DeleteProduct data={data} />
          <Prise discount={discount} prise={prise} discountPrise={discountPrise} />
      </div>
    </div>
  );
};

export default InlineCard;