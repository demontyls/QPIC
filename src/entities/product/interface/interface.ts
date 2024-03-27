export interface IProduct {
  id: number
  name: string;
  img: string;
  rating: number;
  prise: number;
  discount: boolean;
  discountPrise?: number;
}

export interface ICard {
  data: IProduct
}