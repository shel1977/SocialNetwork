import React from 'react';
import style from './DialogItem.module.css';
import humanAvatar from '../../../img/user_pict.jpg'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            <div className={style.dialogHumanImg}><img src={humanAvatar}
                                                       className={style.humanAvatar} alt='userPict'/></div>
            <NavLink to={path} activeClassName={style.activeLink}> {props.name} </NavLink>
        </div>
    )
};

export default DialogItem;