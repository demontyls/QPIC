import React, {FC, useContext} from 'react';
import {IProduct} from '../../entities/product/interface/interface';
import {ILangProvider, LangContext} from '../../shared/providers/lang';
import {IProductProvider, ProductContext} from '../../shared/providers/products';

interface IBuyProduct {
  product: IProduct
}
const BuyProduct:FC<IBuyProduct> = ({ product }) => {
  const { strings } = useContext<ILangProvider>(LangContext);
  const {basket, setBasket} = useContext<IProductProvider>(ProductContext)
  
  return (
    <div>
      <button className="btn py-0 px-0 fw-bold" onClick={() => setBasket([...basket, product])}>
        {strings.buy}
      </button>
    </div>
  );
};

export default BuyProduct;