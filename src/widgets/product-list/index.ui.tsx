import React, {FC} from 'react';
import Card from '../../entities/product/ui/card';
import InlineCard from '../../entities/product/ui/inline-card';
import { IProduct } from '../../entities/product/interface/interface';
import { IChildren } from './interface';
import './style.scss'

interface IProductList {
  data: IProduct[];
  type: string;
  name?: string;
  childrenType: string;
}

const ProductList:FC<IProductList> = ({data, type, name, childrenType}) => {
  const getChildren = (type:string, data:IProduct, key:number) => {
    const children: IChildren = {
      card: <Card key={key} data={data}/>,
      inlineCard: <InlineCard key={key} data={data}/>
    }
    return children[type as keyof IChildren];
  }
  
  return (
    <div className="block-product-list mb-4">
      {name &&
        <h3 className="mb-4 text-secondary">{name}</h3>
      }
      <div className={`product-list ${type}`}>
        { data.map((elem, i) => getChildren(childrenType, elem, i)) }
      </div>
    </div>
  );
};

export default ProductList;