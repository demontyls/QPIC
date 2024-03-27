import React, {FC, useContext, useMemo} from 'react';
import { IProduct } from '../../entities/product/interface/interface';
import { IProductProvider, ProductContext } from '../../shared/providers/products';
import { removeOneProduct } from './function';

interface IChangeQuantity {
  data: IProduct;
}
const ChangeQuantity:FC<IChangeQuantity> = ({ data }) => {
  const { basket, setBasket } = useContext<IProductProvider>(ProductContext);
  const countProduct = useMemo(() => basket.filter(elem => elem.id === data.id).length,[basket]);
  const changeCount = (isSet?: boolean): void => {
    if (isSet) {
      setBasket([...basket, data]);
    } else {
      setBasket(removeOneProduct(basket, data));
    }
  }
  
  return (
    <div className="d-flex align-items-center justify-content-center">
      <button className="btn btn-sm text-primary py-0 d-flex" onClick={() => changeCount(false)}>
        <i className="fa-c-minus icon-2"/>
      </button>
      <div className="font-size-17 fw-bold">{countProduct}</div>
      <button className="btn btn-sm text-primary py-0 d-flex" onClick={() => changeCount(true)}>
        <i className="fa-c-plus icon-2"/>
      </button>
    </div>
  );
};

export default ChangeQuantity;