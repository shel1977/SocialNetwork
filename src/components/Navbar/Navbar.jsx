import React from 'react';
import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./sideBar/SideBar";


const Navbar = (props) => {
    return (
        <div className={style.nav}>

                <nav>
                    <div className={style.item}>
                        <NavLink to='/profile' activeClassName={style.activeLink}>Profile</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to='/dialogs' activeClassName={style.activeLink}>Messages</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to='/news' activeClassName={style.activeLink}>News</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to='/setting' activeClassName={style.activeLink}>Setting</NavLink>
                    </div>
                </nav>

            <div className={style.sideBarFriends}>
                <SideBar sideBar={props.sideBar}/>
            </div>
        </div>
    )
}

export default Navbar;