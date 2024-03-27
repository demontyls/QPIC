import React from 'react';
import SocialLinks from "../../shared/ui/social-links";

const Contacts = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between wrapper p-3 flex-wrap">
        <a  href="tel:+7999-221-8508">
          <h1>8 999 221 85 09</h1>
        </a>
        <SocialLinks/>
      </div>
    </div>
  );
};

export default Contacts;