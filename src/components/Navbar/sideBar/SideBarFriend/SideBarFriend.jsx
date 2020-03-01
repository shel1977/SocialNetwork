import React from 'react';
import style from './SideBarFriend.module.css';


const SideBarFriend = (props) => {
    return(
        <div className={style.sideBarFriend}>
            <div className={style.sideBarFriendImg}><img src="" alt="" /></div>
            <div>{props.name}</div>
        </div>
    )

};

export default SideBarFriend;