import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Encontranos En: </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Av. de los Constituyentes 425, Pacheco</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horarios</p>
        <p className="p__opensans">LUN: Cerrado</p>
        <p className="p__opensans">MAR, MIÉR, JUE y DOM: 19:00 a 00:00</p>
        <p className="p__opensans">VIE y SÁB: 19:00 a 02:00</p>
      </div>
      <a href="https://www.instagram.com/vanburga/" target="_blank">
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visitanos!</button>
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;