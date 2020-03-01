import React from 'react';
import style from './SideBar.module.css';
import SideBarFriend from "./SideBarFriend/SideBarFriend";


const SideBar = (props) => {

    let sideBarFriend = props.sideBar
        .map(i => <SideBarFriend name={i.name}
                                 id={i.id}/>);

    return (
        <div>
            <h3 className={style.sidebarText}>My Friends</h3>
            <div className={style.sideBarFriends}>
                {sideBarFriend}
            </div>
        </div>
    )
}

export default SideBar;