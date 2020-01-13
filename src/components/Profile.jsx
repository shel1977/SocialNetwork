import React from 'react';
import './../App.css';


const Profile = () => {
    return <div className='content'>
        <div>
            <img src={'./../back.jpg'} className='profileImg' alt='profile'/>
        </div>
        <div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>

        </div>
    </div>
};

export default Profile;