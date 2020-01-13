import React from 'react';
import style from './Header.module.css';


const Header = () => {
  return   <header className={style.header}>
      <div>
        <img src="./back.jpg" alt='logo' className={style.logo}/>
      </div>
    </header>
};

export default Header;