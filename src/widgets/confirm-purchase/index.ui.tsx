import React, {useContext} from 'react';
import {ILangProvider, LangContext} from '../../shared/providers/lang';
import {IProductProvider, ProductContext} from '../../shared/providers/products';
import './style.scss';

const ConfirmPurchase = () => {
  const { strings } = useContext<ILangProvider>(LangContext);
  const { totalPrice } = useContext<IProductProvider>(ProductContext);
  return (
    <div className="wrapper confirm-purchase">
      <div className="d-flex justify-content-between align-items-center p-3">
        <span className="text-black">{strings.total}</span>
        <span className="text-black">₽{totalPrice}</span>
      </div>
      
      <button className="btn btn-black">
        {strings.goCheckout}
      </button>
    </div>
  );
};

export default ConfirmPurchase;