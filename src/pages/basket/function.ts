import {IProduct} from "../../entities/product/interface/interface";

export const getUniqueProducts = (products:IProduct[]): IProduct[] => {
  const hash = new Set();
  const unique:IProduct[] = [];
  products.forEach((elem) => {
    if (!hash.has(elem.id)) {
      hash.add(elem.id);
      unique.push(elem);
    }
  });
  return unique;
}