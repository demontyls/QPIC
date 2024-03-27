import React, {FC} from 'react';

interface ILangBtn {
  name: string,
  type: string
}
const LangBtn:FC<ILangBtn> = () => {
  
  return (
    <button className={`btn font-size-15 fw-medium`}>
    
    </button>
  );
};

export default LangBtn;