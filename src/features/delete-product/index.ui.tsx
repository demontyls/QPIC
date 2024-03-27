import React, {FC, useContext} from 'react';
import { IProduct } from '../../entities/product/interface/interface';
import {IProductProvider, ProductContext} from "../../shared/providers/products";

interface IDeleteProduct {
  data: IProduct;
}
const DeleteProduct:FC<IDeleteProduct> = ({data}) => {
  const { basket, setBasket } = useContext<IProductProvider>(ProductContext);
  
  const removeProduct = (data: IProduct) => {
    const result = basket.filter(elem  => elem.id !== data.id);
    setBasket(result);
  }
  
  return (
    <button className="btn p-0 text-danger" onClick={() => removeProduct(data)}>
      <i className="fa-delete icon-2 ms-auto"></i>
    </button>
  );
};

export default DeleteProduct;