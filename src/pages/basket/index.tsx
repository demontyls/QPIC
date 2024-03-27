import React, {useContext, useMemo} from 'react';
import {ConfirmPurchase, ProductList} from '../../widgets';
import { ILangProvider, LangContext } from '../../shared/providers/lang';
import { IProductProvider, ProductContext } from '../../shared/providers/products';
import { getUniqueProducts } from './function';
import './style.scss'

const Basket = () => {
  const { strings } = useContext<ILangProvider>(LangContext);
  const { basket } = useContext<IProductProvider>(ProductContext);
  const uniqueProducts = useMemo(() => getUniqueProducts(basket), [basket]);
  
  return (
    <div className="container">
      <h3 className="mb-4">{strings.basket}</h3>
      <div className="page-content">
        {Boolean(basket.length) ?
          <ProductList type="list" data={uniqueProducts} childrenType='inlineCard'/>
          :
          <h5>{strings.emptyBasket}</h5>
        }
        <ConfirmPurchase />
      </div>
    </div>
  );
};

export default Basket;