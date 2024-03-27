import React, {createContext, JSX, useEffect, useState} from 'react';
import { IProduct } from '../../../entities/product/interface/interface';

/*TODO убрать эни*/
export interface IProductProvider {
  favorites: IProduct[];
  setFavorites: (value: IProduct[]) => void;
  basket: IProduct[];
  setBasket: (value: IProduct[]) => void;
  totalPrice: number;
}

const defaultValue = {};

export const ProductContext = createContext<IProductProvider>(defaultValue as IProductProvider)

export const ProductProvider = ({children} : {
  children: React.ReactElement
} ) : JSX.Element => {
  const config = useProductContext();
  return (
    <ProductContext.Provider value={config}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () :IProductProvider => {
  const [favorites, setFavorites] = useState<IProduct[]>([]);
  const [basket, setBasket] = useState<IProduct[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(()=> {
    let total = 0;
    basket.forEach(elem => total += elem.discountPrise ? elem.discountPrise : elem.prise);
    setTotalPrice(total);
  }, [basket]);
  
  return {
    favorites,
    setFavorites,
    basket,
    setBasket,
    totalPrice
  }
}