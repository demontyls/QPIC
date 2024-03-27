import React from 'react';
import Logo from '../../shared/ui/logo/logo';
import {Link, NavLink} from 'react-router-dom';
import './style.scss'
import ChangeLang from '../../features/change-lang';
import SocialLinks from '../../shared/ui/social-links';
import Nav from "../../shared/ui/nav";
import {FooterNavigations} from "../../shared/config/footer-navigation";

const Footer = () => {
  return (
    <footer className="container">
      <div className="wrapper justify-content-between">
          <Logo  />
          <Nav list={FooterNavigations} />
          <div>
            <NavLink className="mb-3 pb-0 pb-md-3" to="/catalog">Условия сервиса</NavLink>
            <ChangeLang />
          </div>
          <SocialLinks/>
      </div>
    </footer>
  );
};

export default Footer;