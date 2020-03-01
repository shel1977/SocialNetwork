import React from 'react';
import style from './Header.module.css';


const Header = () => {
  return   <header className={style.header}>
      <div>
        <img src={require('../../logo.png')} alt='logo' className={style.logo}/>
      </div>
    </header>
};

export default Header;