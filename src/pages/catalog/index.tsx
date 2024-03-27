import React, {useContext} from 'react';
import { ProductList } from '../../widgets';
import { products } from '../../db/products';
import { ILangProvider, LangContext } from '../../shared/providers/lang';

const Catalog = () => {
  const { strings } = useContext<ILangProvider>(LangContext)
  
  return (
    <div className="container">
      <ProductList name={strings.headphone} type="grid" data={products.headphones} childrenType="card"/>
      <ProductList name={strings.wirelessHeadphones} type="grid" data={products.wirelessHeadphones} childrenType="card"/>
    </div>
  );
};

export default Catalog;