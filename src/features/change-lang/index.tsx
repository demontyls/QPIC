import React, {useContext} from 'react';
import { ILangProvider, LangContext } from '../../shared/providers/lang';
import './style.scss';

const ChangeLang = () => {
  const {setIsRussian, isRussian} = useContext<ILangProvider>(LangContext)
  
  // TODO стилизовать
  return (
    <div className="d-flex align-items-center">
      <i className="fa fa-web me-3 text-secondary" />
      <button className={`btn p-0 me-3 fw-medium ${isRussian ? 'text-primary' : ''}`} onClick={()=> setIsRussian(true)} >
        Рус
      </button>
      <button className={`btn p-0 me-3 fw-medium ${!isRussian ? 'text-primary' : ''}`} onClick={()=> setIsRussian(false)} >
        Eng
      </button>
    </div>
  );
};

export default ChangeLang;