import React from 'react';
import style from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postElement = props.postData.map(p => <Post message={p.message}
                                                    likes={p.likes}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostChange(text)
    };

    return (
        <div className={style.myPosts}>
            <h3>My posts</h3>
            <div className={style.postsBlock}>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={style.postItem}>
                {postElement}
            </div>
        </div>
    )
};

export default MyPosts;