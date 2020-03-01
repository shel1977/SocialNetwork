import React from 'react';
import style from './Post.module.css';


const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={require('../../../../img/user_pict.jpg')}
                 className={style.userPict} alt='userPict'/>
            {props.message}
            <div>
                likes {props.likes}
            </div>
        </div>
    )
};

export default Post;