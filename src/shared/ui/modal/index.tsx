import React, {FC, ReactElement} from 'react';
import './style.scss';
interface IModal {
  title: ReactElement | string;
  body: ReactElement;
  footer: ReactElement;
  show: boolean;
  setShow: (value: boolean) => void;
}
const Modal:FC<IModal> = ({ title, body, footer, show, setShow }) => {
  return (
    <div className="custom-modal-backdrop" onClick={() => setShow(false)}>
      <div className="custom-modal" onClick={(e)=> e.stopPropagation()}>
        <div className="custom-modal-header">
          {title}
          <button className="btn" onClick={() => setShow(false)}>X</button>
        </div>
        <div className="custom-modal-body">
          {body}
        </div>
        <div className="custom-modal-footer">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;