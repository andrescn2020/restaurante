import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contacto</h1>
        <p className="p__opensans">Av. De Los Constituyentes 425, Pacheco</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-headtext">VANBURGA</h1>
        <p className="p__opensans">&quot;Las mejores hamburguesas de zona norte.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.instagram.com/vanburga/" target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horarios</h1>
        <p className="p__opensans">LUN: Cerrado</p>
        <p className="p__opensans">MAR, MIÉR, JUE y DOM: 19:00 a 00:00</p>
        <p className="p__opensans">VIE y SÁB: 19:00 a 02:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 VANBURGA. Todos los Derechos Reservados.</p>
    </div>

  </div>
);

export default Footer;