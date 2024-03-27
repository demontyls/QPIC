import React, {FC, memo, useContext } from 'react';
import { Link } from "react-router-dom";
import './style.scss'
import { IProductProvider, ProductContext } from '../../shared/providers/products';
import { ICountLink, IProductCount } from './interface';

const CountLink:FC<ICountLink> = ({href, icon, name}) => {
  const { basket, favorites } = useContext<IProductProvider>(ProductContext);
  const productsCount = {
    basket: basket.length,
    favorites: favorites.length
  }
  
  return (
    <Link to={`QPIC${href}`} className="text-decoration-none">
      <div className="count-link">
        <i className={`fa icon text-secondary ${icon}`}></i>
        {Boolean(productsCount[name as keyof IProductCount]) &&
          <div className="light-mark font-size-12 fw-bold">
            {productsCount[name as keyof IProductCount]}
          </div>
        }
      </div>
    </Link>
  );
};

export default memo(CountLink);