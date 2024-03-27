import React, { useContext } from 'react';
import {ProductList} from '../../widgets';
import { IProductProvider, ProductContext } from '../../shared/providers/products';
import { ILangProvider, LangContext } from '../../shared/providers/lang';

const Favorites = () => {
  const { basket } = useContext<IProductProvider>(ProductContext);
  const { strings } = useContext<ILangProvider>(LangContext);
  return (
    <div className="container">
      <h2>{strings.favorites}</h2>
      {Boolean(basket.length) ?
        <ProductList data={basket} type="grid" childrenType="card" />
      :
        <span>{strings.emptyFavorites}</span>
      }
    </div>
  );
};

export default Favorites;