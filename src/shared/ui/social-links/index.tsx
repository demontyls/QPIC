import React from 'react';
import './style.scss';

const SocialLinks = () => {
  return (
    <div className="social-Links">
        <a href="https://id.vk.com/account/#/main" target="_blank" className="link">
          <i className="fa fa-VK" />
        </a>
        <a href="https://t.me/demontyls" target="_blank" className="link">
          <i className="fa fa-Telegram" />
        </a>
        <a href="https://wa.me/89992218509" target="_blank" className="link">
          <i className="fa fa-Whatsapp" />
        </a>
    </div>
  );
};

export default SocialLinks;