import React, {FC, memo} from 'react';

interface IPrise {
  discount: boolean;
  prise: number;
  discountPrise?: number;
}
const Prise:FC<IPrise> = ({discountPrise, discount, prise}) => {
  return (
    <div>
      {discount ?
        <div className="d-flex flex-column font-17  text-center">
          <strong className="prise line-h-20">{discountPrise}</strong>
          <s className={`discount-prise font-12 line-h-16 fw-bold`}>{prise}</s>
        </div>
        :
        <strong className="prise font-17 line-h-20">{prise}</strong>
      }
    </div>
  );
};

export default memo(Prise);