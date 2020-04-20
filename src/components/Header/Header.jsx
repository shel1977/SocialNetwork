import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
  return   <header className={style.header}>
      <div>
        <img src={require('../../logo.png')} alt='logo' className={style.logo}/>
          <div className={style.loginBlock}>
              { props.isAuth ? <div>
                      {props.login} - <button onClick={props.logout}>log out</button>
                  </div>
             :  <NavLink to={'/login'}>Login</NavLink>
              }

          </div>
      </div>

    </header>
};

export default Header;