import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={require('../../../img/back.jpg')} className={style.profileImg} alt='profile'/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;