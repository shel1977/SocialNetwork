import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../../redux/profileReducer";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
{/*            <div>
                <img src={require('../../../img/back.jpg')}
                     className={style.profileImg}
                     alt='profile'/>
            </div>*/}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large} alt='profile photo'/>
                <ProfileStatus status={props.status}
                               updateStatus={props.updateStatus}

                />
            </div>
        </div>
    )
};

export default ProfileInfo;