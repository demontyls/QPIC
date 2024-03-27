import React, {FC} from 'react';

interface IRating {
  rating: number
}
const Rating:FC<IRating> = ({rating}) => {
  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-star text-primary-light me-2 icon-2"/>
      <span className="text-secondary fw-bold font-size-17">{rating}</span>
    </div>
  );
};
export default Rating;