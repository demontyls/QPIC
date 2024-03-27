import React from 'react';
import Logo from '../../shared/ui/logo/logo';
import CountLink from '../../features/count-link';

const Header = () => {
  return (
    <header className="fixed-top bg-body">
      <div className="container d-flex justify-content-between align-items-center">
        <Logo />
        <div className="d-flex">
          <CountLink key={0} href="/favorites" icon="fa-like" name="favorites"/>
          <CountLink key={1} href="/basket" icon="fa-shop" name="basket"/>
        </div>
      </div>
    </header>
  );
};

export default Header;