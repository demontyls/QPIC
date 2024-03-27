import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/catalog">
        <img src={require('./../../pix/QPICK.png')} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;