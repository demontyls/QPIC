import React, {FC, useState} from 'react';
import { ICard } from '../../interface/interface';
import Prise from '../../../../shared/ui/prise';
import Rating from '../../../../shared/ui/rating';
import './style.scss';
import BuyProduct from '../../../../features/buy-product';
import {createPortal} from "react-dom";
import Modal from "../../../../shared/ui/modal";

const Card:FC<ICard> = ({ data }) => {
  const { name, discount, rating, img, prise, discountPrise, id } = data;
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div className="wrapper custom-card" onClick={()=> setShowModal(true)}>
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
      
      {showModal && createPortal(
        <Modal
          title="Модалка"
          body={ <div className="img"><img src={img} alt="product-img" /></div> }
          footer={<BuyProduct product={data}/>}
          show={showModal}
          setShow={setShowModal}
        />,
          document.body,
          String(id)
      )}
    </>
  );
};

export default Card;