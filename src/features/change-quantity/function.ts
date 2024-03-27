import {IProduct} from "../../entities/product/interface/interface";
/** @description Функция возвращает массив продуктов, без учета текущего товара
 * @param {IProduct[]} products Массив товаров
 * @param {IProduct} currentElem Текущий товар
 * @return IProduct[]
 * */
export const removeOneProduct = (products:IProduct[], currentElem:IProduct): IProduct[] => {
  const copyBasket = [...products];
  const ndx = copyBasket.findIndex(elem => elem.id === currentElem.id);
  copyBasket.splice(ndx, 1);
  return copyBasket;
}