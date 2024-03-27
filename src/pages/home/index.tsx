import React, {useContext} from 'react';
import {ILangProvider, LangContext} from '../../shared/providers/lang';
import { Link } from 'react-router-dom';

const Home = () => {
  const { strings } = useContext<ILangProvider>(LangContext)
  return (
    <div className="container">
      <div className="wrapper p-3 text-center">
        <Link to="/catalog" className="btn btn-primary btn-lg text-white">
          {strings.getProduct}
        </Link>
      </div>
    </div>
  );
};

export default Home;